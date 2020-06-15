import React from 'react';
import styles from './css/Main.module.css';

function Courses(props) {
	return (
		<div className={[ 'bg-light m-2 mr-3 mb-4', styles.boxes ].join(' ')} style={{ opacity: '35%' }}>
			<h1 className={[ 'pl-4 bg-dark text-light', styles.heading ].join(' ')}>
				Courses
				<button href="#" className={[ 'material-icons m-2 p-0', styles.addBtn ].join(' ')}>
					add
				</button>
			</h1>
			<h5 className="mt-4 text-center">comming soon</h5>
		</div>
	);
}

export default Courses;