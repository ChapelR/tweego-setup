## Basic Tweego Setup

- [Changelog](docs/changelog.md)  
- [Updating Instructions](docs/updating.md)

> If you want to use Tweego v1.x, you'll want to switch to the `tweego-1` branch of this repo.

This is the basic setup I use for creating Tweego projects.  It's here so I can clone it when I need it, but you may find it useful, too.

For information on why you may want to use this repo, [look here](docs/why-use-this.md).

**Note**: Before publishing a story, you'll want to change the ifid in the `project/twee/compiler-options.twee` file.  If you delete it and try to build, Tweego will spit out a new one for you.

### Installing

You'll need [NodeJS](docs/installing-node.md) and [Tweego](docs/installing-tweego.md) installed.  Click the links to find my step-by-step instructions (with pictures) on how to do this on Windows systems.  You will need to combine my instructions with a bit of Googling to get these working on other OSes.  You may also wish to globally install [Gulp](docs/installing-gulp.md) (v4.0.0 or later), but this is optional.

After getting all that squared away, clone or download this repo.  Open a command prompt and navigate to the repo's root directory (where the `package.json` file is) and run the command `npm install`.  This may take a couple of minutes, just let it go.  After that, everything should be ready to go.

### Structure

There are four main folders that you'll be working with here.  The first is the `dist` folder.  When you compile your project, it will get sent here as `dist/index.html`.  If you have external resources using relative links, like fonts, sounds, or images, you'll want to put them in here.

The `project` folder is where you'll edit your passages, and only your passages.  Your JavaScript and CSS code will wind up here eventually, but you won't write it here--just ignore the `project/styles` and `project/scripts` folders entirely.

The `src` folder is where your custom JavaScript and CSS code will go.  Place JavaScript files in the `src/scripts` folder, and make sure they have the extension `.js`.  Place your CSS files in the `src/styles` folder and make sure they have the extension `.css`.  Files in these folders will be concatenated, minified, (for JS) transpiled, and (for CSS) autoprefixed, then sent to the `project` folder to be picked up by Tweego.  Also, only JavaScipt files in the `src/scripts` folder will be linted when you run the linter.

The `src/modules` folder allows you to add scripts, styles, fonts, and more directly to the document's `<head>`. Things like Google analytics scripts, web libraries, and favicon code will go here. Code included in this way is not processed and is simply included as-is.

The `vendor` folder is a place to put code that comes from other people.  For example, if you were using an add-on from the SugarCube site, or one of my custom macros, you'd paste the CSS and JS files in here.  You can mix them together; you don't need to use seperate folders for the CSS and JS files.

Finally, there's the `head-content.html` file.  You can add HTML code to your project's `<head>` using this file.  If you don't need it, just leave it blank.

### Usage (CLI)

The following scripts are run from the command line.  Simply navigate to the project's root directory and type in the appropriate command.  Note that windows is weird, and some commands require you to type `-win` after them to get them to work on Windows systems.  However, on Windows systems you also get a collection of batch files to run the scripts for you, so it all works out.

* `npm config set tweego-setup:format NAME`: You can use this command to set which format Tweego should use to compile.  By default, it's SugarCube 2.  You need to enter the format name as you would to Tweego, so it's based on what you have the format called on your computer.  For example, `npm config set tweego-setup:format harlowe-2` would probably change the format to Harlowe v2.1.0.
* `npm run build` or `npm run build-win`: Packages up all your CSS and JS code, then compiles the project and opens it in your default browser.  You'll need to use the second version on Windows systems.
* `npm run testmode` or `npm run testmode-win`: As `npm run build`, but compiles your story in test mode.
* `npm run tweegobuild` or `npm run tweegobuild-win`: This command only runs the Tweego portion of the build process, so files from `src` aren't added in.  Useful for building faster when you're only working on TwineScript.
* `npm run gulp build`: Only re-packages the JavaScript and CSS files, but does **not** actually compile the story.  Probably not useful.
* `npm run lint` or `npm run lint-js`: Runs the JavaScript linter on any JavaScript files found in the `src/scripts` folder and reports the results for debugging.  You will want this if you do basically any coding in JavaScript at all, trust me.  
* `npm run lint-css`: Runs the CSS linter, which tests for bugs and errors in your CSS files, similar to the JavaScript linter.

### Usage (batch files - Windows only)

If you're on a Windows OS, a number of batch files are included to run these scripts for you without you needing to open a command prompt or (shudder) type things.  These are useless to you on other operating systems and can safely be deleted.

* `build.bat`: Runs `npm run build-win` for you.
* `build-test.bat`: Runs `npm run testmode-win` for you.
* `format.bat`: Lets you quickly see what formats Tweego has access to and change between them.  Roughly equivalent to `npm config set tweego-setup:format NAME` but more user-friendly.
* `lint-js.bat`: Runs `npm run lint-js` for you.
* `lint-css.bat`: Runs `npm run lint-css` for you.

### Configuration Settings:

The `src/config.json` file contains configuration options you may want to alter.  It looks like this:

```json
{

    "javascript": {
        "minify": true,
        "transpile": true
    },

    "css": {
        "minify": true,
        "autoprefix": true
    },

    "directories": {
        "user-js": "./src/scripts/**/*.js",
        "user-css": "./src/styles/**/*.css",
        "vendor-js": "./vendor/**/*.js",
        "vendor-css": "./vendor/**/*.css",
        
        "out-js": "./project/scripts",
        "out-css": "./project/styles",

        "vendor-file-js": "bundle.min.js",
        "vendor-file-css": "bundle.min.css",
        "user-file-js": "user.min.js",
        "user-file-css": "user.min.css"
    },

    "browsers": [
        "> 1%",
        "last 3 versions",
        "last 10 Chrome versions",
        "last 10 Firefox versions",
        "IE >= 9",
        "Opera >= 12"
    ]
    
}
```

**JavaScript Options:**

* `minify`: set this to `false` if you don't want your scripts to be minified.
* `transpile`: if you write code in ES6 syntax, it is automatically transpiled to ES5 giving you better browser support.  you can shut this feature off.  note that doing so may cause the minifier to stop working.

**CSS Options:**

* `minify`: set this to `false` if you don't want your CSS to be minified.
* `autoprefix`: vendor prefixes will be automatically added for you to maximize browser support.  you can shut this off if you want to.

**Directory Options:**

The first four options here tell the build process where to find your scripts and styles.  You can change the locations of your folders around using these options.  You can also change these options to arrays of strings that resolve to individual file paths to load your code in a specific order--the default order is whatever your OS uses (usually alphanumeric).

The second chunk of options allows you to change where built scripts should be put and what their file names should be.

**Browsers:**

A list of target browsers, using [browserlist-style queries](https://github.com/browserslist/browserslist), that you want to target. This effects what the transpiler and autoprefixers do. The defaults set here are copied directly from SugarCube's browserlist, to maintain parity and avoid giving up any browser support, but you may want to change this.

### Donations

Note: I suggest donating to [Twine development](https://www.patreon.com/klembot) or [SugarCube development](https://www.patreon.com/thomasmedwards) if you really want to help out, but I'd welcome a few dollars if you feel like it.

[![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/F1F8IC35)