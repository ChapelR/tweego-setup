## Installing Gulp (Optional)

The core of this build system is based on the task-runner Gulp, which just makes things a little smoother for us.  This setup uses Gulp locally already, but if you want to mess around with it more, you'll probably want to globally install it.  You can do so with the following command:

`npm install --global gulp`

After doing so, you'll want to look at the `gulpfile.js` file to define new tasks or alter old ones.  When installed globally, you can run gulp tasks directly, without needing to go through npm.  So `npm run gulp build` becomes `gulp build`.

Again, installing gulp globally isn't required to use this setup.