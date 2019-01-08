# Hashnode Google Chrome extension

A basic POC for Hashnode chrome extension, created on 8th of January 2019

## Setup

Built on node `v8.9`  

`yarn install`  

Root folder is the source for extension.  
Run `yarn start` to start the react app. In order to live test the extension copy the `manifest.json` file manually to `./dist` folder.  
Keep making changes the parcel takes care of the rest.  

To build for production  
Run `yarn build` this time no need to copy manifest file manually everything is taken care of.

---

### Procedure to load extension
Visit `chrome://extension` hit `load unpacked` and select dist folder with `manifest.json` file in it and you are good to go.  
If you want to inpect things. You can right click like a normal webpage on the dropdown.

## TODO
- Icons

**Contact**
- girish@hashnode.com