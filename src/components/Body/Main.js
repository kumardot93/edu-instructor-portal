import React, { Component } from 'react';
import styles from './css/Main.module.css';
import Sidebar from './Sidebar.js';
import Board from './Board.js';

import { connect } from 'react-redux';
import { updateMaterial } from './../../redux/actions/Material.js';

class Main extends Component {
	//Fetching Dashboard data
	componentDidMount = () => {
		fetch(window.base + '/home/api/instructor-dashboard-data/', { credentials: window.cred })
			.then((response) => response.json())
			.then((data) => this.props.updateMaterial(data))
			.catch((error) => alert(error));
	};

	render() {
		return (
			<div className="d-flex flex-column p-2 align-items-stretch justify-content" id={styles.main}>
				<Board />
				<Sidebar />
			</div>
		);
	}
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
	return {
		updateMaterial: (data) => dispatch(updateMaterial(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
