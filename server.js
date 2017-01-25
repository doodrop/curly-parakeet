'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const hapiAsyncHandler = require('hapi-async-handler');
const vision = require('vision');
const inert = require('inert');
const hapiSwagger = require('hapi-swagger');
const hapiAuthJwt = require('hapi-auth-jwt2');

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

const plugins = [{
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
}];

server.register(plugins, (err) => {
	if (err) {
		throw err;
	}
	server.start((error) => {
		if (error) {
			throw error;
		}
		console.log(`server running at: ${server.info.uri}`);
	});
});
