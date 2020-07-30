import React, { useState } from 'react';
import styles from './css/UserBtn.module.css';

import { connect } from 'react-redux';

function UserBtn(props) {
	const [ userPannelVis, changeVis ] = useState('none');
	return (
		<div className="ml-2" id={styles.userBtnCont}>
			<button
				className="p-0"
				id={styles.userBtn}
				onClick={(ev) => changeVis(userPannelVis === 'block' ? 'none' : 'block')} //apear and disapear onClick
				onBlur={(ev) => setTimeout(changeVis, 10, 'none')} //to make the dropdown disapear afetr user clicks somewhere else
			>
				<img //DP of user
					src={props.profile.name !== undefined ? window.media_url + props.profile.fields.profile_pic : ''}
					id={styles.userBtnImg}
					alt=""
				/>
			</button>
			<div
				onClick={(ev) => setTimeout(changeVis, 15, 'block')} //Don't let dropdown disapear
				id={styles.userPannel}
				className="p-2 pr-3"
				style={{ display: userPannelVis }}
			>
				{props.profile.name !== undefined ? ( //profile data: username and email of user
					<React.Fragment>
						<span className={styles.userData}>{props.profile.username}</span>
						<span className={[ styles.userData, 'text-secondary' ].join(' ')}>{props.profile.email}</span>
					</React.Fragment>
				) : (
					''
				)}
				<hr className="m-0 mt-1 bg-secondary" />
				<a //links profile and logout
					href="#"
					className={[ styles.navLink, styles.userPannelLink, 'pb-0 mt-2 mb-1 mr-2 ml-1' ].join(' ')}
					style={{ opacity: '25%' }}
				>
					Profile
				</a>
				<a
					href={window.base + '/user/logout/'}
					className={[ styles.userPannelLink, 'pb-0 mb-0 mr-2 ml-1' ].join(' ')}
				>
					Logout
				</a>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		profile: state.Profile
	};
};

export default connect(mapStateToProps)(UserBtn);
