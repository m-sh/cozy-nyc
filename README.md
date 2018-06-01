
# cozy.nyc
### A site for NEETs...

![Home](docs/homepage.png)

[![Build Status](https://travis-ci.org/cozy-nyc/cozy.nyc.svg?branch=master&style=flat-square)](https://travis-ci.org/cozy-nyc/cozy.nyc)
[![Dependency Status](https://david-dm.org/cozy-nyc/cozy.nyc.svg?style=flat-square)](https://david-dm.org/cozy-nyc/cozy.nyc)
[![devDependency Status](https://david-dm.org/cozy-nyc/cozy.nyc/dev-status.svg?style=flat-square)](https://david-dm.org/cozy-nyc/cozy.nyc?type=dev)

---

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

The first time it may take a little while to generate the first `webpack-assets.json` and complain with a few dozen `[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)` printouts, but be patient. Give it 30 seconds.

### Using Redux DevTools

[Redux Devtools](https://github.com/gaearon/redux-devtools) are enabled by default in development.

- <kbd>CTRL</kbd>+<kbd>H</kbd> Toggle DevTools Dock
- <kbd>CTRL</kbd>+<kbd>Q</kbd> Move DevTools Dock Position
- see [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more detailed information.

If you have the [Redux DevTools chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) installed it will automatically be used on the client-side instead.

If you want to disable the dev tools during development, set `__DEVTOOLS__` to `false` in `/webpack/dev.config.js`.  
DevTools are not enabled during production by default.

## Building and Running Production Server

```bash
npm run build
npm run start
```

#### Unit Tests

The project uses [Jest](https://facebook.github.io/jest/) to run your unit tests.

To run the tests in the project, just simply run `npm test` if you have `Chrome` installed, it will be automatically launched as a test service for you.


## Join Our Discord
__Discord__ - https://discord.gg/3WSA2SG

Special Thanks to @bertho-zero for providing https://github.com/bertho-zero/react-redux-universal-hot-example
