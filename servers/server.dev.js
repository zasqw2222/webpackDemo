'use strict'
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opn = require('opn');

const config = require('../webpack.config.dev');
const port = process.env.PORT || 8080;
config.entry.app.unshift(`webpack-dev-server/client?http://localhost:${port}/`,'webpack/hot/only-dev-server');



let compiler = webpack(config);

let server = new webpackDevServer(compiler,{
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    stats: {
        colors: true
    }
});

server.listen(port,'localhost', function(err){
    if(err){
        console.log(err);
    }
    console.log("server started on port " + port);
    opn(`http://localhost:${port}`);
})