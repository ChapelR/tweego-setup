## Updating tweego-setup

To update your build system in an ongoing project, replace the `package.json` and `gulpfile.js` files with the new versions, then delete the `node_modules` folder and the `package-lock.json` files and run `npm install` from the command-line. You can also optionally delete the `.babelrc` file if it exists, as it is no longer used, but it won't hurt anything either way. 

I recommend backing up your old version via a version control system (like GitHub or BitBucket) so that you can revert the changes if things go wrong. If you don't or can't and things do indeed go wrong, saving a copy of the old `package.json` and `gulpfile.js` files is enough for you to revert back using the same process outlined above.

You can check which version you currently are using and which version is the latest available in this repo in the `package.json` files, right up near the top.

> Note: If you update to tweego-setup v2.0.0 or higher, you need to be sure to update to Tweego v2.0.0 or higher.