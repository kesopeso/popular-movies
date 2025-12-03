# Popular movies app

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
