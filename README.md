A code challenge.

SwapiShips is a React Single-Page Application displaying star ships from the Star Wars API, [swapi](https://swapi.co/).

# How to run it
The `src` folder contains the source code files, which need to be compiled and bundled before they can be used in the browser.
This is done using [babel.js](https://babeljs.io/) for compilation and [webpack](https://webpack.js.org/) for bundling.

## Requirements
You need [Node.js and npm](https://nodejs.org/) installed on your system.

## Instructions

Clone the repo using `git` or download it as a zip file from [github](https://github.com/timkg/swapiships)

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

The example above uses [npx](https://nodejs.dev/the-npx-nodejs-package-runner) to run [serve](https://github.com/zeit/serve), but any other webserver would work just as well. If you have python on your system, a simple
```
python -m SimpleHTTPServer
```
will suffice.

You can also see the site live at [https://sw.timkg.de](https://sw.timkg.de).

## Troubleshooting
Chrome sometimes complains about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests made from a website running under localhost. If that should happen, please consider using another browser for testing this site locally, such as Firefox. Or check it out at [https://sw.timkg.de](https://sw.timkg.de).

# Notes

## Tooling setup
When I started working on this project, I pondered using [create-react-app](https://create-react-app.dev/) or [Gatsby](https://www.gatsbyjs.org/) to kick things off. While those tools are excellent in providing frictionless access to modern best practices, they also come at a cost: intransparent build processes, hidden complexity, and dependency explosion. I decided to go with a less complex setup for this project.

## Next steps
If this project were to be continued, I'd work on the following things next:
- A ship detail view, accessible by clicking on a ship card.
- Client-side routing with deep-linking to specific ships and pagination pages.
- A better mobile experience. Loading more ships is not as polished as it could be right now.
- Adapting the loading animation to display different paragraphs from the films, instead of always showing the same one.
- A smoke test which runs periodically and reports via email if the page is down or not displaying the expected content.
- Find proper images for the star ships to display on the cards.
