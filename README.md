## Basic Tweego Setup (v3)

> If you want to use Tweego v1.x, you'll want to switch to the `tweego-1` branch of this repo.

This is the basic setup I use for creating Tweego projects.  It's here so I can clone it when I need it, but you may find it useful, too.

**Note**: Before publishing a story, you'll want to change the ifid in the `project/twee/compiler-options.twee` file.  If you delete it and try to build, Tweego will spit out a new one for you.

### Installing

You'll need [NodeJS](docs/installing-node.md) and [Tweego](docs/installing-tweego.md) installed.  Click the links to find my step-by-step instructions (with pictures) on how to do this on Windows systems.  You will need to combine my instructions with a bit of Googling to get these working on other OSes.

After getting all that squared away, clone or download this repo.  Open a command prompt and navigate to the repo's root directory (where the `package.json` file is) and run the command `npm install`.  This may take a couple of minutes, just let it go.  After that, everything should be ready to go.

### Structure

There are four main folders that you'll be working with here.  The first is the `dist` folder.  When you compile your project, it will get sent here as `dist/index.html`.  If you have external resources using relative links, like fonts, sounds, or images, you'll want to put them in here.

The `project` folder is where you'll edit your passages, and only your passages.  Your JavaScript and CSS code will wind up here eventually, but you won't write it here--just ignore the `compiled` directory. For scripts and styles that are already compiled and ready to include (e.g., one of my custom macro scripts) you can drop these files directly into the `project/compiled` directory.

The `src` folder is where your custom JavaScript and CSS code will go.  Place JavaScript files in the `src/scripts` folder, and make sure they have the extension `.js`.  Place your CSS files in the `src/styles` folder and make sure they have the extension `.css`.  Files in these folders will be concatenated, minified, (for JS) transpiled, and (for CSS) autoprefixed, then sent to the `project` folder to be picked up by Tweego.

The `src/modules` folder allows you to add scripts, styles, fonts, and more directly to the document's `<head>`. Things like Google analytics scripts, web libraries, and favicon code will go here. Code included in this way is not processed and is simply included as-is.

Finally, there's the `head-content.html` file.  You can add HTML code to your project's `<head>` using this file.  If you don't need it, just leave it blank.

### Usage (CLI)

The following scripts are run from the command line.  Simply navigate to the project's root directory and type in the appropriate command. 

* `npm start`: Starts up a simple localhost test server. Not needed for all projects.
* `npm run build`: Compiles your JS and CSS, then compiles everything with Tweego and drops the compiled file in the `dist` folder.
* `npm run build:test`: As `npm run build`, but compiles your story in test mode.
* `npm run compile:src`: This command only runs the non-Tweego portion of the build process. Probably not very useful.
* `npm run compile:twee`: This command only runs the Tweego portion of the build process, so files from `src` aren't added in.  Useful for building faster when you're only working on TwineScript.
* `npm run watch:twee`: As t`npm run compile:twee`, only compiles the Tweego portion, but does so in watch mode.
* `npm run test:twee`: As `npm run compile:twee`, only compiles the Tweego portion, but does so in test mode.

On Windows, you can double-click the `build.bat` file to run `npm run build` for you without needing to use the terminal.

### Configuration Settings:

At the top of the `build.js` file are a number of options you can alter.

### Donations

Note: I suggest donating to [Twine development](https://www.patreon.com/klembot) or [SugarCube development](https://www.patreon.com/thomasmedwards) if you really want to help out, but I'd welcome a few dollars if you feel like it.

[![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/F1F8IC35)