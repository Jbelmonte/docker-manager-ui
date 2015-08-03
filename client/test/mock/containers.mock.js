(function () {
	angular
		.module('docker-manager-ui.mock.containers', [])
		.service('containersMockData', containersMockData);
	
	var containers = allContainers();
	function containersMockData () {
		this.getContainers = function (filters) {
			if (!filters) {
				return containers;
			} else {
				return containers.filter(function (cont) {
					return filters.all === undefined || filters.all === true || cont.Status.startsWith('Up');
				});
			}
		}
	}
	
	function allContainers () {
		return [
	        {
	            "Command": "cat",
	            "Created": 1436195843,
	            "Id": "7e574d9e7d783376b9510a83e4cbd4c2726f01eb0a9f01dd2047bb0a0e54c6a6",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/happy_thompson"
	            ],
	            "Ports": [],
	            "Status": "Exited (137) 10 days ago"
	        },
	        {
	            "Command": "cat",
	            "Created": 1436195840,
	            "Id": "c1eeaf956ba1b1854c7013fac865dc79025901ccf72b60021184970529b012a0",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/thirsty_hopper"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 10 days ago"
	        },
	        {
	            "Command": "ps",
	            "Created": 1436195838,
	            "Id": "354874ff8f46d5512065411761f77ed4b44ba0c09425f392c31a86860b02a2fa",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/furious_jones"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 10 days ago"
	        },
	        {
	            "Command": "ls -la",
	            "Created": 1436195836,
	            "Id": "bf568f422b2b79dda250f159e7c30451d67589a2c44e179d3dbc7269d6ae4e57",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/clever_bartik"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 3 weeks ago"
	        },
	        {
	            "Command": "ls -la",
	            "Created": 1436195835,
	            "Id": "94cbba7d7964c3dd2963813703aaddd73448804e35eaf69a81ce98710131ed69",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/silly_archimedes"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 3 weeks ago"
	        },
	        {
	            "Command": "ls -la",
	            "Created": 1436195819,
	            "Id": "9d98bc05a20e72ca7694aab197de18dd094ee89a9013492698d389f7c67e1fd2",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/nostalgic_blackwell"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 3 weeks ago"
	        },
	        {
	            "Command": "ps",
	            "Created": 1436195811,
	            "Id": "27b3f76385b6aad1d0d38c8743ec240cd2629b8cb98c6c144c98dd57ab71ccec",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/drunk_jones"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 3 weeks ago"
	        },
	        {
	            "Command": "cat",
	            "Created": 1436195807,
	            "Id": "b079b9d18dcec975a427c69b840a06af53bfa2308ed73b955932922635db6e3b",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/elegant_payne"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 10 days ago"
	        },
	        {
	            "Command": "cat",
	            "Created": 1436195803,
	            "Id": "560fbf9e05c568822f4354c27b18d56b190b0430d3fbd9de214b1d17024e7192",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/elated_einstein"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 10 days ago"
	        },
	        {
	            "Command": "cat",
	            "Created": 1435772748,
	            "Id": "f1c1300e067043abea3a4d9081c5058679e828c9702a0a5e0ee9c9396a5656ac",
	            "Image": "node:latest",
	            "Labels": {},
	            "Names": [
	                "/mad_mccarthy"
	            ],
	            "Ports": [],
	            "Status": "Exited (0) 10 days ago"
	        }
	    ];
	}
})();