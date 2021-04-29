# CITIZENS DATA BASE 
using React, Node js, Express, MongoDB

I  containerized the api server and react client and created docker-compose to connect them.
Run `docker pull ivanjohn/server` from root to build api
Run `docker pull ivanjohn/client` from root to build client
Run `docker compose up` from root to run containers with docker-compose

After this add 2 files `cities.json` and `citizens.json` to mongo container
db name  `hierarchy`
collections name: `cities`, `citizens`
(for example : 
docker cp cities.json CONTAINER_NAME:/cities.json
docker exec -it CONTAINER_NAME  bash
mongoimport --db hierarchy --collection cities --drop --jsonArray --batchSize 1 --file ./cities.json)
