Ionic and Leaflet.js for Maply.io
==============

This project contains an example of Ionic v1 working with Leaflet.js

## How to use

First of all you need to clone this repository for your computer.

```bash
$ git clone https://github.com/arceliver/ionic-leaflet
$ cd ionic-leaflet
```
Install `Ionic`and `Cordova`

```bash
$ npm install -g ionic cordova
```

Now you need to install the dependencies saved on your package.json, this command will require [NodeJS](https://nodejs.org/en/download/) with [NPM](https://www.npmjs.com/get-npm)

Run this command to install:
```bash
$ npm install
```

And then, we are good to go.

Just run:
```bash
$ ionic serve
```
Your default browser should show up.

------------

## How it works

*Display a processed map's result tiles on Leaflet;*
Map is being displayed with latest stable version, released on August 8, 2017, of Leaflet.js. Loading from a CDN.

*Be able to change the current map using a custom select component placed in a header component;*
Just click on map name to open the select box.
![](https://i.imgur.com/5rnIrpO.jpg)

*The current map must be accessible using a URL (Need to use a router to change beetwen maps). In case of mobile app, an URL Scheme;*
Different maps are accessible via ID. Just need to add map id on URL (Ex: /maply/1, redirects to map from id 1)

*The current map must be centered when initialized using it's bounds;
Display all annotations associated with the current map.*
Map is centered using `fitBounds` command from Leaflet.js

*The data with all maps tiles url, name and annotations are provided is a static JSON file under /public/data.*
File `maps.json` is placed inside data folder in app public area. 

