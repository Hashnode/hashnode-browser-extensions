# Hashnode Google Chrome extension 🕸

A Google chrome extension with hot & trending posts on tap.

## Setup

Built on NodeJs `v8.9` using React, Parcel, Sass  

`yarn install`  

Root folder is the source for extension.  
Run `yarn start` to start the react app.  

In order to live test the extension copy the `manifest.json` file manually to `./dist` folder.  Keep making changes the parcel takes care of the rest.  

**🔴 Changes to the manifest.json must be made to the one in root folder and dist folder should be untouched.**  

----

**To build for production**  
Run `yarn build` this time no need to copy manifest file manually everything is taken care of.

---

### Procedure to load extension
Visit `chrome://extension` click on `load unpacked` and select dist folder with `manifest.json` file in it and you are good to go.  

- You can test live as you develop by keeping the parcel server running.
- If you want to inpect things. You can right click like a normal webpage on the dropdown.


**Contact**
- girish@hashnode.com