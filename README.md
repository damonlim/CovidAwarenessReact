# CovidAwarenessReact
Basic React Application to register patient and exposure status

## Environment Setup
### Run individually without container
The existing codes can be run without Docker installation. There are two main modules to setup which are "frontend" and "backend".\
Please follow the steps below to start the backend service:
```
1. Go to backend directory
2. Run npm install
3. Run npm start
```

Next is to configure the frontend service by following the steps below:
```
1. Go to frontend directory
2. Run npm install
3. npm start
```

### Run with container
Requirement: Docker and DockerCompose
Please follow the steps below:
```
1. Go to frontend directory
2. Open the package.json file
3. Locate the "proxy" property and change the value from "http://localhost:5000" to "http://api-server:5000"
4. Go to root directory of this application (parent of frontend)
5. Run: docker-compose up -d
```
NOTE: In case you have Docker container with name "api-server", it may conflict with this application. A simple fix will be to delete your existing api-server and run "docker-compose up --build". 

## Review the application
### From AWS Cloud
An environment is setup in AWS cloud running with Docker container with url below:
```
http://13.215.96.117
```

