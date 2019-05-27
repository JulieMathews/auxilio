import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Error from '../error/error';
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			photo: '',
			email: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		let val;
		if (event.target.name === 'photo') {
			val = event.target.files[0];
		} else {
			val = event.target.value;
		}
		this.setState({
			[event.target.name]: val
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		var formData = new FormData();
		formData.append('username', this.state.username);
		formData.append('photo', this.state.photo);
		formData.append('email', this.state.email);
		formData.append('password', this.state.password);

		//request to server to add a new username/password
		axios.post('/user/', formData)
			.then(response => {
				console.log(response)
				if (!response.data.error) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
					this.setState({ error: response.data.error });
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error);
			})
	}


render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
		return (
		<div className="SignupForm">
			<Error message={this.state.error} />
			<h4>Sign up</h4>
			<form className="form-horizontal" enctype="multipart/form-data">
			<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">email</label>
					</div>
					<div className="col-5 col-mr-auto">
						<input className="form-input"
							type="text"
							id="email"
							name="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-5 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Photo</label>
					</div>
					<div className="col-5 col-mr-auto">
						<input className="form-input"
							type="file"
							id="photo"
							name="photo"
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-5 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-4"></div>
					<button
						className="btn btn-primary col-4 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}
}

export default Signup
