import React from 'react';
import styles from './css/Sidebar.module.css';
function Utilities(props) {
	//Provides bunch of utility routs not implemented at the moment
	return (
		<div
			className={[ 'bg-light ml-auto m-2 mb-4 d-flex flex-row', styles.sidebar ].join(' ')}
			style={{ opacity: '35%' }}
		>
			<button className={[ 'flex-fill btn btn-dark m-1', styles.btnFont ].join(' ')}>
				<sub className={[ 'material-icons mr-2', styles.mi ].join(' ')}>account_balance_wallet</sub>Earnings
			</button>
			<button className={[ 'flex-fill btn btn-dark m-1', styles.btnFont ].join(' ')}>
				<sub className={[ 'material-icons mr-2', styles.mi ].join(' ')}>description</sub>Reports
			</button>
			<button className={[ 'flex-fill btn btn-dark m-1', styles.btnFont ].join(' ')}>
				<sub className={[ 'material-icons mr-2', styles.mi ].join(' ')}>announcement</sub>Actives
			</button>
			<button className={[ 'flex-fill btn btn-dark m-1', styles.btnFont ].join(' ')}>
				<sub className={[ 'material-icons mr-2', styles.mi ].join(' ')}>assessment</sub>Trending
			</button>
		</div>
	);
}

export default Utilities;
