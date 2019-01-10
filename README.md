# Hashnode Google Chrome extension 🕸

A Google chrome extension with hot & trending posts on tap. Built with Node.js `v8.9` using React, Parcel, and Sass.  


## Setup

```
git clone https://github.com/Hashnode/hashnode-chrome-extension
yarn
yarn start
```

In order to live test the extension copy the `manifest.json` file manually to `./dist` folder.  Keep making changes and the parcel takes care of the rest.  

**🔴 Changes to the manifest.json must be made to the one in root folder and dist folder should be untouched.**  

----

**To build for production**  
Run `yarn build`. This time no need to copy manifest file manually. Everything is taken care of.

---

### Procedure to load extension
Visit `chrome://extension`, click on `load unpacked` and select dist folder with `manifest.json` file in it and you are good to go.  

- You can test live as you develop by keeping the parcel server running.
- If you want to inpect things, you can right click like a normal webpage on the dropdown.


**Contact**
girish@hashnode.com
