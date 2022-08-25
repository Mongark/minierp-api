# run in production mode.
build:
    yarn run build

# run in development mode with hot-reload.
run-dev:
    yarn run start:dev

# start MongoDB docker container
start-mongodb-container:
    sudo docker run -d -p 27017:27017 mongo