# Flickr Gallery

Responsive gallery that shows most recent images load to Flickr.

On image click a lightbox is opened showing some information of it, such as the title, the description and the owner's username (which links to the original post on Flickr).

The gallery loads a small subset of images and loads more via infinite scroll technique. Each request loads 15 new images. When the max page number is reached, the infinite scroll is deactivated.  

Only tested on Google Chrome v69, Safari v12 and Mozilla Firefox v57. Running in different web browsers or versions may lead to unexpected behaviour.

## Prerequisites

Node: v10.10 is recommended. Previous versions are discouraged and may lead to unexpected behaviour.

## Installing

From the root folder:
```
npm install
```

## Configuration

The only mandatory configuration needed for the App to run is setting the ApiKey to use the Flickr API.

You have to edit its value in *server/config.js*, as indicated in the file.

For now, the *imagesPerPage* parameter is not editable from a config file. If it is necessary to change it, it can be done editing the *PHOTOS_PER_PAGE* variable in the source code of *client/src/components/GalleryContainer.js*

## Getting Started with a Development servers

**It is necessary to configure the app before starting it. Read Configuration chapter**

For development purposes, the client is served by a dedicated development server.

This will start the backend server on port 8080 and the client dev server on port 3000, both in watch mode.
The app will be accessible on: http://localhost:3000.

To start the dev servers, from the root folder:
```
cd server
npm run watch
cd ../client
npm start
```

## Running the tests

Unit tests have been implemented only in the client. To execute them, from the root folder:

```
cd client
npm test
```

## Deployment

**It is necessary to configure the app before starting it. Read Configuration chapter**

This will generate production-ready client files, ready to be served from the backend server. After that, it will start it. The app will be accessible on: http://localhost:8080

From the root folder:

```
npm start
```