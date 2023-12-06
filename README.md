# split-wine

## Prerequisite
- `nvm` is highly recommended to install nodejs in your local environment that allows you switch different node versions per project. Read also [here](https://github.com/nvm-sh/nvm).
- docker
- docker-compose

## Installation
If you node doesn't have `yarn` yet, please follow [here](https://classic.yarnpkg.com/en/docs/install#windows-stable)
```bash
$ yarn install
```
This action will install all dependencies of this project into the node instance.

## Running the app

```bash
# run a postgres DB locally;requires docker and docker-compose installed
$ yarn run test:infra:up 

# development
$ yarn run start

# or, watch mode
$ yarn run start:dev

# or, production mode
$ yarn run start:prod

# tear down db
$ yarn run test:infra:down 
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e
# tear down db
$ yarn run test:infra:down 

# test coverage
$ yarn run test:cov
```
