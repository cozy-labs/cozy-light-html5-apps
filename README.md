# Cozy Light Static Apps    

Plugin to allow the Cozy Light platform to run apps made only of static files.

## Install

    cozy-light add-plugin cozy-labs/cozy-light-static-apps

## Install a static app

Install it as normal application, the plugin take care of the rest.

    cozy-light install cozy-labs/hello

## How to make a static app for Cozy Light?

Build it as any HTML5 app then publish it on Github with a [Cozy Light manifest](https://github.com/cozy-labs/hello/blob/master/package.json) at the root of the repository. Add one field to the manifest:

    "type": "static",
   
Then make sure that your HTML entry point is called `index.html`.
