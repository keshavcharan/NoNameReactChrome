import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppComponent from './reactComponents/appComponent.js'
import Header from './header.js'

class LoginRouter extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		console.log("rendering")
		return(
			<div>
				<Header/>
				<AppComponent/>
			</div>
		)
	}
}

export default withRouter(LoginRouter)