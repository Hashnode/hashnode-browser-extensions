## Hashnode browser extension for Firefox and Google Chrome 🕸

Google chrome and Mozilla firefox browser extension with hot & trending posts on tap. 
Built with Node.js `v8.9` using React, Parcel, and Sass. 
Follows Standard JS

## Setup
```
git clone https://github.com/Hashnode/hashnode-browser-extensions.git
yarn install
yarn start-web // starts the web app
```
##### Google Chrome extension

```
yarn start-chrome // same as web app but is served from ./dist/dist-chrome  
```
now copy `chrome/images` folder to `dist/dist-chrome`  and then load `dist/dist-chrome` into browser
```
yarn build-chrome // builds for chrome and will be available in ./builds/chrome  
```
This time no need to copy anything

##### Mozilla Firefox extension

```
yarn start-firefox // same as web app but is served from ./dist/dist-firefox
```
now copy `firefox/images` folder to `dist/dist-firefox` and then load `dist/dist-firefox` into browser
```
yarn build-firefox // builds for firefox and will be available in ./builds/firefox  
```
This time no need to copy anything

`manifest.json` files are maintained sperately for firefox and chrome in their respective folders.
In order to live test the extension copy the `manifest.json` file manually to respective `./dist/{dist-chrome|dist-firefox}` folder.  Keep making changes and the parcel takes care of the rest.  

**🔴 Changes to the manifest.json must be made to the respective folder and dist folder should be untouched. Instead manually copy if you are testing it locally**  

#### Dockerised way of building

Make sure you have docker running & yarn is installed in your computer
Finally, run `yarn build-in-container`. This will throw build files in the end in a directory called `builds`

----

### Procedure to load extension for chrome
Visit `chrome://extension` in Google Chrome, click on `Load unpacked` and select build/dist folder with `manifest.json` file in it and you are good to go.  

### Procedure to load extension for firefox
Visit `about:debugging#addons` in Mozilla Firefox, click on `Load Temporary Add-on` and select the firefox build/dist folder with `manifest.json` in it and you are good to go.

- You can test live as you develop by keeping the parcel server running.
- If you want to inpect things, you can right click like a normal webpage on the dropdown.


**Contact**
girish@hashnode.com
