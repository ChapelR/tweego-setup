## Why Use This Setup

If you're familiar with Node, or have another build system you like, just use the build process you're most comfortable with.  There's no reason to migrate to my system unless you want to.  If you instead have been using only Tweego to build, or are interested in moving to Tweego but don't have any experience with Node, I'll try to explain the benefits of using something like this to build your projects.

### Handling code.

Most of the code that actually makes it into applications and websites doesn't come directly from a programmer's text file, but instead is fed through a bunch of systems that check, format, and improve their code.  This process helps prevent bugs, improve code quality, and generally makes life easier.  This system implements gulp and node in a way that doesn't require *too much* knowledge from you, but still gives you a lot of those benefits.

The source code files you write in the `src` directory are **minified** before being added to your project.  This makes the code as small as possible while still doing the same thing.  This increases performance dramatically, since when a user goes to play your game, all the code in that game needs to be downloaded by their browser before it can be opened.  Almost all websites minify their code to improve loading times.

Additionally, your JavaScript code will be **transpiled** from ES6 to ES5.  Every browser supports ES5, but there aren't many (if any) that completely support every part of ES6.  Little time-saving things like the `class` keyword or arrow functions will limit your browser support (and your audience).  You can avoid this by writing in only ES5 syntax, or you can use a transpiler like the one included in this build process to let you have the best of both worlds.

Your CSS code will be **autoprefixed**.  When browser vendors first start to support a feature of CSS, they usually do so by implementing a vendor-prefixed version of the feature.  For example:

```css
#blah {
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
}
```

It can be hard to remember which properties need prefixed and for which browsers.  Essentially, an `autoprefixer` will look up this information for you, and add in the vendor prefixes where appropriate, so you can just write:

```css
#blah {
    transition: all 0.3s;
}
```

And call it a day.

### Linting.

Linters are programs that read your code and tell you when they find something that is likely or definitely a bug.  This can be anything from misspelled variables to syntax errors to logic mistakes to just generally bad code.  This build system uses JSHint, which is a (somewhat infamously) very relaxed linter.  In other words, it tends to focus mostly on *really* bad stuff and less on things like coding style.  This makes it a pretty good fit for new-ish programmers.

When you run the linter, it'll read all your JavaScript files, then tell you what's wrong, in what file, and in what line.  So when your code doesn't work, instead of hunting for that one tiny little mistake, you can just run the linter.  You'll want to look at the code leading up to the line where the linter reported the error if the line itself looks fine.

Linters are powerful debugging tools.  You'll wonder how you ever did anything without them, and maybe, like me, really consider making one for TwineScript but never get around to it.

### Batch files for the lazy.

CLI applications are great, but when you just wind up running the same three commands over and over, you may as well write a batch script to do it for you.  I didn't include the equivalent MacOS and Linux command/bash files, but you can look at the batch files for guidance there.  I only own Windows systems, so I can't test anything I make for other operating systems; I'm hesitant to release anything.