# Docker Manager UI

[![Build Status](https://travis-ci.org/Jbelmonte/docker-manager-ui.svg)](https://travis-ci.org/Jbelmonte/docker-manager-ui)
[![Coverage Status](https://coveralls.io/repos/Jbelmonte/docker-manager-ui/badge.svg?branch=master&service=github)](https://coveralls.io/github/Jbelmonte/docker-manager-ui?branch=master)
[![Code Climate](https://codeclimate.com/github/Jbelmonte/docker-manager-ui/badges/gpa.svg)](https://codeclimate.com/github/Jbelmonte/docker-manager-ui)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

[![Dependency Status](https://david-dm.org/jbelmonte/docker-manager-ui.svg)](https://david-dm.org/jbelmonte/docker-manager-ui)
[![devDependency Status](https://david-dm.org/jbelmonte/docker-manager-ui/dev-status.svg)](https://david-dm.org/jbelmonte/docker-manager-ui#info=devDependencies)



## Stack

Web application based on a RESTful API and a HTML web client.

Stack:

* Express
* Node.js (of course)
* AngularJS


## Dependencies

Application falls on [dockerode](https://github.com/apocas/dockerode/) to access Docker RESTful API, exposed as a RESTful API as well to be consumed by AngularJS client.