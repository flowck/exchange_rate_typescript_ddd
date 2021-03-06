# exchange_rate

An implementation of https://docs.openexchangerates.org/

## Architecture details

- Layered architecture
- DDD

## Specs

Actors:

- Client: User that requests services from the system.
- Admin: User that manages the system.

## How to run

1 - Start database service using docker: `npm run db:run`

2 - Create a new database: `npm run db:create`

3 - Setup and populate the database: `npm run db:migrate; npm run db:seed:all`

4 - Install dependencies: `npm install`

5 - Run: `npm start`

## Firing requests

`curl http://localhost:8080/api/v1/rates`

## Project structure

```
src/
  | API/ (Presentation / API layer: http, graphql, gRPC)
  | Domain/
  | Instrastructure/
```

### Parts involved during the processing of a request

![How the system process a request](./_docs/request-processing.png)

> Being updated based on the system evolution.

## License

Under MIT license
