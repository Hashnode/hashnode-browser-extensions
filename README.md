# Hashnode browser extension for Firefox and Google Chrome 🕸

Google chrome and Mozilla firefox browser extension with hot & trending posts on tap. 
Built with Node.js `v8.9` using React, Parcel, and Sass. 
Follows Standard JS

## Setup
```
git clone https://github.com/Hashnode/hashnode-chrome-extension
yarn install
yarn start // starts the web app
```
##### Google Chrome extension

```
yarn start-chrome // same as web app but is served from ./dist/dist-chrome
yarn build-chrome // builds for chrome and will be available in ./builds/chrome
```
##### Mozilla Firefox extension

```
yarn start-firefox // same as web app but is served from ./dist/dist-firefox
yarn build-firefox // builds for firefox and will be available in ./builds/firefox
```

`manifest.json` files are maintained sperately for firefox and chrome in their respective folders.
In order to live test the extension copy the `manifest.json` file manually to respective `./dist/{dist-chrome|dist-firefox}` folder.  Keep making changes and the parcel takes care of the rest.  

**🔴 Changes to the manifest.json must be made to the respective folder and dist folder should be untouched. Instead manually copy if you are testing it locally**  

##### Dockerised way of building

Make sure you have docker running & yarn is installed in your computer
Finally, run `yarn build-in-container`. This will throw build files in the end in a directory called `builds`

----

**To build for production**  
Run `yarn build-all`. This builds for both chrome and firefox. This time no need to copy manifest file manually. Everything is taken care of.

---

### Procedure to load extension for chrome
Visit `chrome://extension` in Google Chrome, click on `Load unpacked` and select build/dist folder with `manifest.json` file in it and you are good to go.  

### Procedure to load extension for firefox
Visit `about:debugging#addons` in Mozilla Firefox, click on `Load Temporary Add-on` and select the firefox build/dist folder with `manifest.json` in it and you are good to go.

- You can test live as you develop by keeping the parcel server running.
- If you want to inpect things, you can right click like a normal webpage on the dropdown.


**Contact**
girish@hashnode.com
