# Popular movies app

## Author

Đorđe Kesić <dordekesic.keso@gmail.com>

## About

This application is a simple movie browser built using
The Movie Database (TMDb) API. It displays a list of currently popular movies
on the home page, with a search bar at the top for quickly finding a specific
title within the available results.

Clicking on any movie opens a dedicated details page, where additional
information about the selected film is shown, such as its description, release
date, rating, and more.

In short, the app provides a clean and minimal way to explore popular movies and
view detailed information about each one.

## Getting Started

This project is dockerized. Commands that affect the project files should be
run via bin/cmd.sh file. If you don't want to use docker, just make sure you
have node v25.2.1 (this is the version used for development of this project) or
above installed.

Cd into the project's root folder and use the following commands for the development:

- copy .env.example file as .env or .env.local and modify it with appropriate
variables

- starting the development server

```bash
bin/start-dev.sh
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

- stopping the development server

```bash
bin/stop-dev.sh
```

- executing a command via docker container (npm install is just an example command)

```bash
bin/cmd.sh npm install
```

## Development process

- bootstrapped the application with npx create-next-app@latest
- added basic docker workflow files
- added prettier for consistent formatting
- added first shadcn components using npx shadcn@latest add \<some_component\>
- worked on html by adding new components and used mocked data to display the components
- added data access and basic movies retrieval from the api - no security
checks, error handling, rate limiting, nothing! (this is to test the visuals)
- added movie details page
- added movie filtering (only filters results retrieved from the server)
- added production docker configuration

## Reflection

I managed to implement all basic requirements:

- homepage with movies grid
- search bar that filters through available movies
- movie details page with more info about the movie
- responsive design
- typescript used for development
- docker for easier development / deployment across different environments

Improvements i tend to implement in the future:

- caching (adding expiry headers so clients don't refetch pages, caching pages
on the server so that new clients receive cached versions, adding cache to movies
repository)
- bulletproofing api requests to external services (tmdb): retries, circuit
breakers, timeouts, fallbacks, rate limiting,...
- adding tests to the project!!! (currently project is small, but it may start
growing quickly)
- introducing local database so no unnecessary external calls are made
- adding background service for retrieving data and storing it locally
- adding skeleton loaders on resource heavy objects (images for instance)
- saving images locally and saving multiple image sizes
- improving image tags to use different sizes on different devices
- adding load more movies button at the bottom of movies list
- adding table display as well (only grid display is available currently)
- adding display filters (genre, year, language,...)
