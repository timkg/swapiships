A code challenge.

SwapiShips is a React Single-Page Application displaying star ships from the Star Wars API, [swapi](https://swapi.co/).

# How to run it
The `src` folder contains the source code files, which need to be compiled and bundled before they can be used in the browser.
This is done using babel.js for compilation and webpack for bundling.

## Requirements
Node.js and npm

## Instructions

Clone or download the repository

```
git clone https://github.com/timkg/swapiships.git
cd swapiships
```

Install dependencies

```
npm install
```

Run using a local dev server...
```
npm run develop
```

...or build a production bundle and serve it with a local fileserver
```
npm run build
cd public
npx serve
```

The example above uses npx to run serve, but any other webserver would work just as well.

## Troubleshooting
Chrome sometimes complains about CORS requests when running a website under localhost. If that should happen, please consider using another browser, such as Firefox. 
