import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import React from 'react';
import { withStyles } from "material-ui";
import {
	requestFileUpload,
	completeTask,
	addFileToProp,
	
	sendTokens,
	startLogin,
	createNewToken,
	setModalMessage,
} from '../../actions';

//import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

class DashboardContainer extends React.Component {
	render() {
		return (
			<Dashboard { ...this.props } />
		)
	}
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    user: state.user,
    prop: state.prop,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	completeTask: (task) => { dispatch(completeTask(task)) },
  	handleFileUpload: (file) => { dispatch(requestFileUpload(file)) },
  	addFileToProp: (file) => { dispatch(addFileToProp(file)) },
    // coming later:
    send: () => dispatch(sendTokens()),
    startLogin: () => dispatch(startLogin()),
    createNewToken: (token) => dispatch(createNewToken(token)),
    setModalMessage: (config) => dispatch(setModalMessage(config)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

//export default DashboardContainer
