#How to access this repo

1. Clone/download this repo
2. Navigate to the root of this folder in the terminal and install webpack `npm i webpack` and `npm i webpack-cli` if you don't have the webpack-cli installed.
3. Then use `npm run serve` and the application should fire on port 3030

#Unit Testing

1. Add this to the scripts block in package.json `"test": "jest --env=jsdom"`
2. I had to install `npm install -D jest-environment-jsdom`
