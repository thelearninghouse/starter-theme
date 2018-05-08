// mix-hmr.js

let mix = require('laravel-mix');

class WPHot {

	boot() {
		if (Config.hmr) {
			Config.resourceRoot = 'http://localhost:8080/';
		}
	}

	webpackConfig(webpackConfig) {
		if (Config.hmr) {
			return {
				devtool: "inline-source-map",
				output: {
					publicPath: 'http://localhost:8080/'
				}
			}
		}
	}

	webpackRules() {
		return {
			test: /\.test$/,
			loaders: []
		}
	}

}

mix.extend('wpHot', new WPHot());
