## Changelog

### v1.1.1

Released: March 22, 2020

- Fixed typo in gulpfile.
- Updated dependencies.

### v1.1.0

Released: May 13, 2019

- Updated Babel presets and configuration to prevent issues with the `typeof` operator.  
- Added `browsers` config option for authors to adjust the behavior of Babel / CSS auto-prefixing.
- Updated to Gulp v4.x so that the build process works with Node 11.  
- Updated several dependencies.  
- Mild refactor of `gulpfile.js` to be compatible with Gulp 4, along with some other improvements.  
- Added CSS linting (`npm run lint-css`); JavaScript linting recieved a new alias `npm run lint-js`.