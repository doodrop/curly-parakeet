'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const hapiAsyncHandler = require('hapi-async-handler');
const vision = require('vision');
const inert = require('inert');
const hapiSwagger = require('hapi-swagger');
const hapiAuthJwt = require('hapi-auth-jwt2');
const routes = require('./app/routes/index');
const jwtConfig = require('./app/config/jwt');
const authHelper = require('./app/handlers/auth/helper');

const hapiSwaggerOptions = {
	info: {
		title: 'Doodrop API',
		version: '0.0.1',
		contact: {
			url: 'https://github.com/doodrop/curly-parakeet',
		},
	},
	schemes: ['https'],
};

server.connection({
	port: process.env.PORT || 3000,
	routes: {
		cors: true,
	},
});

const plugins = [
	{
		register: hapiAsyncHandler,
	}, {
		register: vision,
	}, {
		register: inert,
	}, {
		register: hapiSwagger,
		options: hapiSwaggerOptions,
	}, {
		register: hapiAuthJwt,
	},
];

const validate = (decoded, request, callback) => {
	authHelper.validateToken(decoded)
		.then(() => callback(null, true), () => callback(null, false));
};

server.register(plugins, (err) => {
	if (err) {
		throw err;
	}
	server.start((error) => {
		if (error) {
			throw error;
		}
		server.auth.strategy('jwt', 'jwt', {
			key: jwtConfig.key,
			validateFunc: validate,
			verifyOptions: {
				ignoreExpiration: false,
				algorithms: ['HS256'],
			},
		});
		server.auth.default('jwt');
		server.route(routes);
		console.log(`server running at: ${server.info.uri}`);
	});
});
