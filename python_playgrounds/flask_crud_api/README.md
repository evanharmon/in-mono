# README
adapted from the example guide: https://github.com/headinthecloud5/youtube-docker-compose-variables
Simple python playground app with a postgres database of users. This is not meant to be production ready or best-practice, it's for playgrounding.

## Commands

### Local flask app work
start local postgres or `docker-compose up -d flask_db`
`dotenv run -- flask run --host=0.0.0.0 --port=3000`

### Build or re-build flask app
`docker-compose build`

### Start all services
`docker-compose up -d --build flask_app`

### Stop all services
`docker-compose down`
or remove all volumes as well
`docker-compose down -v`

### Watch and restart flask after changes
docker-compose.yml is setup with a `sync+restart`
`docker-compose up --watch --build flask_app`