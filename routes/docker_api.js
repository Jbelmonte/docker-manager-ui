var express = require('express'),
	route = express.Router(),
	docker_api = require('../controllers/docker_controller');

// Loader for requests involving a specific container	
route.param('containerId',				docker_api.containers.loadContainer);

// REST API
route.get ('/containers',						docker_api.containers.index);
route.post('/containers/stopAll',				docker_api.containers.stopAll);
route.get ('/containers/:containerId',			docker_api.containers.show);
route.post('/containers/:containerId/start',	docker_api.containers.start);
route.post('/containers/:containerId/stop',		docker_api.containers.stop);

module.exports = route;