# pendo-test-automation
## Automation testing for Pendo

By using automated testing tools, developers can easily create automated tests to check the functionality of their applications. Automated tests are also useful in ensuring that the code is bug-free and working efficiently in production.

This automation tests are for Pendo project. This also has sample test files that uses chai and mocha for assertion testing.

## Features

- Multi-Browser Support
- Multi-Language Compatibility
- Dynamic Web Elements
- Easy Testing

## Tech

This test automation is based on Pendo project that uses a number of open source to work properly:

- [node.js] - evented I/O for the backend
- ReactJS
- BackBoneJS
- selenium-webdriver - version ^4.11.1
- chai - version ^4.3.8

## Installation

This automation test project requires Pendo setup to run. Although you can test sample test files without any project dependencies.

Install the dependencies and devDependencies and start the server.

```sh
cd pendo-test-automation
npm i
```

Note: To test Pendo's automation cases, Pendo's all servers must be up and running.

# ENV sample
```sh
HOSTNAME
EMAIL
PASSWORD
```

For development environment
```sh
NODE_ENV=development node test/*.js,
```
For stage environment
```sh
NODE_ENV=stage node test/*.js,
```

For production environment

```sh
prod: NODE_ENV=production node test/*.js,
```

# Test sample automation cases

Sample tests are made for https://lambdatest.github.io/sample-todo-app/ To do app. It is an open source platform that provides sample projects for automation testing.

- Move firstTest.js and secondTest.js to test/
- Move pendoTest.js from test/ to test_bk/


