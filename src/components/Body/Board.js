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
				url={window.base + '/studentTest/api/newTest/'}
				success_url={window.base + '/studentTest/create-testSA/'}
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
				url={window.base + '/studentTest/api/newTestSeries/'}
				// success_url={window.base + '/material/create-test/'}
				success_url={window.base + '/studentTest/create-test-series/'}
			/>,
			el
		);
	};
	render() {
		console.log(this.props.material);
		return (
			<div className="d-flex align-items-stretch flex-wrap align-self-stretch m-2 mb-3 p-1" id={styles.board}>
				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')} style={{ opacity: '0.45' }}>
					<p className={[ 'display-4 d-flex flex-row', styles.heading ].join(' ')}>
						Class
						<span className="mr-2 ml-auto">{this.props.material.courses}</span>
					</p>
					<p className={styles.desc}>Comming Soon...</p>
					<hr />
					<p className={styles.pBtns}>
						Create New Class
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						Classes
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>launch</button>
					</p>
					<p className={styles.pBtns}>
						Reports
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>
							insert_chart_outlined
						</button>
					</p>
				</div>
				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')} style={{ opacity: '0.45' }}>
					<p className={[ 'display-4 d-flex flex-row', styles.heading ].join(' ')}>
						Courses
						<span className="ml-auto mr-2">{this.props.material.courses}</span>
					</p>
					<p className={styles.desc}>Comming Soon...</p>
					<hr />
					<p className={styles.pBtns}>
						Create New Course
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						Courses
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
					<p className={[ 'display-4 d-flex flex-row', styles.heading ].join(' ')}>
						Tests
						<span className="ml-auto mr-2 text-primary">{this.props.material.tests}</span>
					</p>
					<p className={styles.desc + ' text-secondary'}>
						Self Assesment Tests, meant for learning, practice and self evaluation
					</p>
					<hr />
					<p className={styles.pBtns} onClick={this.newTest}>
						Create New Test
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p
						className={styles.pBtns}
						onClick={() => window.open(window.base + '/studentTest/testSA/', '_self')}
					>
						Tests
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
					<p className={[ 'display-4 d-flex flex-row', styles.heading ].join(' ')}>
						Test Series
						<span className="ml-auto mr-2 text-primary">{this.props.material.testSeries}</span>
					</p>
					<p className={styles.desc}>A series of tests for better learning and evaluation</p>
					<hr />
					<p className={styles.pBtns} onClick={this.newTestSeries}>
						Create New Series
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p
						className={styles.pBtns}
						onClick={() => window.open(window.base + '/studentTest/test-series/', '_self')}
					>
						Tests Series
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
					<p className={[ 'display-4 d-flex flex-row', styles.heading ].join(' ')}>
						Blogs
						<span className="ml-auto mr-2">{this.props.material.courses}</span>
					</p>
					<p className={styles.desc}>Comming Soon...</p>
					<hr />
					<p className={styles.pBtns}>
						Create New Blog
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						Blog
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>launch</button>
					</p>
					<p className={styles.pBtns}>
						Reports
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>
							insert_chart_outlined
						</button>
					</p>
				</div>

				<div className={[ 'm-1 ml-2 mr-2 bg-white p-4', styles.boxes ].join(' ')} style={{ opacity: '0.3' }}>
					<p className={[ 'display-4 d-flex flex-row', styles.heading ].join(' ')}>
						Events
						<span className="ml-auto mr-2">{this.props.material.courses}</span>
					</p>
					<p className={styles.desc}>Comming Soon...</p>
					<hr />
					<p className={styles.pBtns}>
						Create New Event
						<button className={[ 'material-icons p-0 float-right', styles.btns ].join(' ')}>add</button>
					</p>
					<p className={styles.pBtns}>
						Events
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
