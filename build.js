// list of javascript and CSS files (optional)
// leave the arrays empty and the files in the relevant folders will be compiled in the order provided by the OS
const files = {
    // if you choose to include lists of files, only the included files will be compiled!
    js : [
        // if order of files is important, list them here in the correct order
    ],
    css : [
        // if order of files is important, list them here in the correct order
    ]
};

// paths to directories containing raw source files
const jsPath = "src/scripts/";
const cssPath = "src/styles/";
// path to project files
const outputPath = "project/compiled/";

const cleanCssOptions = {
    // CleanCSS options (https://github.com/clean-css/clean-css#constructor-options)
};
const terserOptions = {
    // Terser options (https://github.com/terser/terser#minify-options)
};
const babelOptions = {
    // Babel options (https://babeljs.io/docs/en/options)
    presets  : [['@babel/preset-env', {
        targets : [
            "> 1%",
            "last 3 versions",
            "last 10 Chrome versions",
            "last 10 Firefox versions",
            "IE >= 9",
            "Opera >= 12"
        ]
    }]]
};

// you shouldn't need to change anything below this comment if you're just editing your compiling options!

const jetpack = require("fs-jetpack");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const CleanCSS = require("clean-css");
const Terser = require("terser");
const Babel = require('@babel/core');

function compileCSS () {
    const css = (files.css && files.css instanceof Array && files.css.length > 0) ? 
        files.css.map( fileName => {
            return jetpack.read(`${cssPath}${fileName}`);
        }).join("\n\n") :
        jetpack.find(cssPath, { matching : "*.css" }).map( fileName => {
            return jetpack.read(fileName);
        }).join("\n\n");

    postcss([ autoprefixer ]).process(css, { from : undefined }).then(result => {
        result.warnings().forEach( warn => console.warn(warn.text) );
        jetpack.write(`${outputPath}build.css`, new CleanCSS(cleanCssOptions).minify(result.css).styles, { atomic : true });
    });
}

function compileJS () {
    let js = (files.js && files.js instanceof Array && files.js.length > 0) ? 
        files.js.map( fileName => {
            return jetpack.read(`${jsPath}${fileName}`);
        }).join("\n\n") : 
        jetpack.find(jsPath, { matching : "*.js" }).map( fileName => {
            return jetpack.read(fileName);
        }).join("\n\n");

    js = Babel.transform(js, babelOptions).code;

    Terser.minify(js, terserOptions).then(result => {
        if (result.error) {
            console.error(result.error);
        }
    
        jetpack.write(`${outputPath}build.js`, result.code, { atomic : true });
    });
}

// run
compileCSS();
compileJS();