var Docker = require('dockerode'),
	fs = require('fs'),
	path = require('path');

// Socket file
//var docker = new Docker({ socketPath: '/var/run/docker.sock' });

// Default config for current machine
var docker = new Docker();

console.log('Docker config:');
console.log('DOCKER_HOST', process.env.DOCKER_HOST);
console.log('DOCKER_CERT_PATH', process.env.DOCKER_CERT_PATH);
console.log('DOCKER_TLS_VERIFY', process.env.DOCKER_TLS_VERIFY);

var containers = {
	index: function (req, res, next) {
		docker.listContainers(req.query, function (err, containers) {
			if (err) {
				console.error('Error listing containers', err);
				next(err);
			} else {
				res.json(containers);
			}
		});
	},
	stopAll: function (req, res, next) {
		docker.listContainers(req.query, function (err, containers) {
			if (err) {
				console.error('Error listing containers', err);
				next(err);
			} else {
				var cb = function (err, data) {
					console.log('Stopped container', data);
				};
				containers.forEach(function (containerInfo) {
					docker.getContainer(containerInfo.Id).stop(cb);
				});
				res.send('Stopped '+containers.length+' containers');
			}
		});
	},
	loadContainer: function (req, res, next, containerId) {
		console.log('Retrieving container', containerId);
		req.container = docker.getContainer(containerId);
		next();
	},
	show: function (req, res, next) {
		console.log('Show container with id', req.container.id);
		req.container.inspect(function (err, data) {
			console.log('Inspect container result');
			if (err) {
				next(err);
			} else {
				res.json(data);
			}
		});
	},
	start: function (req, res, next) {
		req.container.start(function (err, data) {
			if (err) {
				next(err);
			} else {
				res.json(data);
			}
		});
	},
	stop: function (req, res, next) {
		req.container.stop(function (err, data) {
			if (err) {
				next(err);
			} else {
				res.json(data);
			}
		});
	},
	remove: function (req, res, next) {
		req.container.remove(function (err, data) {
			if (err) {
				next(err);
			} else {
				res.json(data);
			}
		});
	}
};

var lib = {
	containers: containers
};

module.exports = lib; 