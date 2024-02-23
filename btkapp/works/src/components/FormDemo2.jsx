import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alerfify from "alertifyjs";
export default class FormDemo2 extends Component {
	state = { email: "", password: "", city: "", description: "" };
	handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({ [name]: value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		alerfify.success(this.state.email + " added to DB!");
		alerfify.success(this.state.password + " added to DB!");
		alerfify.success(this.state.city + " added to DB!");
		alerfify.success(this.state.description + " added to DB!");
	};
	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="enter your email"
							onChange={this.handleChange}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="enter your password"
							onChange={this.handleChange}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label for="description">Description</Label>
						<Input
							type="textarea"
							name="description"
							id="description"
							placeholder="enter  description"
							onChange={this.handleChange}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label for="city">City</Label>
						<Input
							type="select"
							name="city"
							id="city"
							onChange={this.handleChange}
						>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Mardin</option>
                            <option>Bursa</option>
                        </Input>
					</FormGroup>
                    <Button type="submit">Save</Button>
				</Form>
			</div>
		);
	}
}
