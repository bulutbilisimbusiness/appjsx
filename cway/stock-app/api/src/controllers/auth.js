"use strict";
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
	login: async (req, res) => {
		/*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password.'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */
		const { username, email, password } = req.body;
		if ((username || email) && password) {
			const user = await User.findOne({ $or: [{ username }, { email }] });
			if (user && user.password === passwordEncrypt(password)) {
				if (user.is_active) {
					let tokenData = await Token.findOne({ user_id: user._id });
					if (!tokenData)
						tokenData = await Token.create({
							user_id: user._id,
							token: passwordEncrypt(user._id.toString() + Date.now()),
						});
					const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_KEY, {
						expiresIn: "30m",
					});
					const refreshToken = jwt.sign(
						{ _id: user._id, password: user.password },
						process.env.REFRESH_KEY,
						{
							expiresIn: "3d",
						}
					);
					res.send({
						error: false,
						//token:tokenData.token,
						//FOR REACT PROJECT
						key: tokenData.token,
						bearer: { accessToken, refreshToken },
						user,
					});
				} else {
					res.errorStatusCode = 401;
					throw new Error("This account is not active.");
				}
			} else {
				res.errorStatusCode = 401;
				throw new Error("Wrong username/email or password.");
			}
		} else {
			res.errorStatusCode = 401;
			throw new Error("Please enter username/email and password.");
		}
	},
	logout: async (req, res) => {
		/*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Logout"
            #swagger.description = 'Delete token key.'
        */
		const auth = req.headers?.authorization || null;
		const tokenKey = auth ? auth.split(" ") : null;
		let result = {};
		if (tokenKey && tokenKey[0] == "Token") {
			result = await Token.deleteOne({ token: tokenKey[1] });
		}
		res.send({
			error: false,
			message: "Logout was OK.",
			result,
		});
	},
};
