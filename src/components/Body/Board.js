import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './OverlayForm.js';
import styles from './css/Board.module.css';

import { connect } from 'react-redux';

class Board extends Component {
	newTest = (event) => {
		//Create new test
		event.preventDefault();
		let el = document.getElementById('overlay');
		el.style.display = 'block';
		ReactDOM.render(
			<Form
				title="New Test"
				url={window.base + '/material/api/newTest/'}
				success_url={window.base + '/material/create-test/'}
			/>,
			el
		);
	};
	newTestSeries = (event) => {
		//Create new test
		event.preventDefault();
		let el = document.getElementById('overlay');
		el.style.display = 'block';
		ReactDOM.render(
			<Form
				title="New Test Series"
				url={window.base + '/material/api/newTestSeries/'}
				// success_url={window.base + '/material/create-test/'}
				success_url="#"
			/>,
			el
		);
	};
	render() {
		console.log(this.props.material);
		return (
			<div
				className="d-flex flex-wrap flex-fill align-self-stretch align-items-start m-2 mb-3 p-1"
				id={styles.board}
			>
				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')} style={{ opacity: '0.3' }}>
					<p className="display-4">
						Courses
						<a className="float-right mr-2" href="#" style={{ textDecoration: 'none' }}>
							{this.props.material.courses}
						</a>
					</p>
					<br />
					<hr />
					<p className={styles.pBtns}>
						Create New Course
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						View Courses
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>launch</button>
					</p>
					<p className={styles.pBtns}>
						Reports
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>
							insert_chart_outlined
						</button>
					</p>
				</div>

				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')}>
					<p className="display-4 ">
						Tests
						<a className="float-right mr-2" href="#" style={{ textDecoration: 'none' }}>
							{this.props.material.tests}
						</a>
					</p>
					<hr />
					<p className={styles.pBtns} onClick={this.newTest}>
						Create New Test
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns} onClick={() => window.open('test/', '_self')}>
						View Tests
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>launch</button>
					</p>
					<p className={styles.pBtns} style={{ opacity: '0.3' }}>
						Reports
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>
							insert_chart_outlined
						</button>
					</p>
				</div>

				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')}>
					<p className="display-4 ">
						Test Series
						<a className="float-right mr-2" href="#" style={{ textDecoration: 'none' }}>
							{this.props.material.testSeries}
						</a>
					</p>
					<hr />
					<p className={styles.pBtns} onClick={this.newTestSeries}>
						Create New Series
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						View Tests Series
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>launch</button>
					</p>
					<p className={styles.pBtns} style={{ opacity: '0.3' }}>
						Reports
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>
							insert_chart_outlined
						</button>
					</p>
				</div>

				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')} style={{ opacity: '0.3' }}>
					<p className="display-4 ">
						Blogs
						<a className="float-right mr-2" href="#" style={{ textDecoration: 'none' }}>
							{this.props.material.courses}
						</a>
					</p>
					<hr />
					<p className={styles.pBtns}>
						Create New Blog
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						View Blog
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>launch</button>
					</p>
					<p className={styles.pBtns}>
						Reports
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>
							insert_chart_outlined
						</button>
					</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		material: state.Material
	};
};

export default connect(mapStateToProps)(Board);
