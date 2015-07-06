/// <reference path="typings/node/node.d.ts"/>
var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
	app.quit();
});

app.on('ready', function () {
	
	var atomScreen = require('screen');
	var size = atomScreen.getPrimaryDisplay().workAreaSize;
	
	mainWindow = new BrowserWindow({
		width: size.width,
		height: size.height
	});
	
	mainWindow.loadUrl('https://flipboard.com');
	
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
});