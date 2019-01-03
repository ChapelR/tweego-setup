## Installing Tweego

On most versions of Windows, you can use [this installer](https://github.com/ChapelR/tweego-installer/releases) to set up Tweego instead of installing it manually. If you cannot use said installer or prefer to set it up manually, carry on with these instructions.

Installing Tweego globally is probably your best bet.  You can also install it locally, which has some benefits.  I won't cover the latter right now, but it may be added in the future.

These instructions are for Windows 10.  Windows 7 follows a similar process, but you'll need to add to the path variable manually.  This guide may help you get started on other operating systems, too.

### Step 1: Download Tweego

![alt text](https://i.imgur.com/VhjWCad.png)

You can grab both Tweego and a collection of Twine 2 formats from [Tweego's site](http://www.motoslave.net/tweego/).  You may need to update some of the story formats in the collection.  Regardless, download both and unzip them.

### Step 2: Find a home for Tweego

You can put Tweego anywhere, but the simplest places that are closest to your main drive's root are probably best.  I usually put my stuff right on C.

![alt text](https://i.imgur.com/zExCubX.png)

I create a folder called `tweego`, then place the tweego binary and the `story-formats` folder inside it.

![alt text](https://i.imgur.com/BEMfQaw.png)

Just to be safe about it, make sure that the inside of the `story-formats` folder looks something like this.

![alt text](https://i.imgur.com/8skfhb4.png)

### Step 3: Adding Tweego to you PATH

Next we'll need to add Tweego to out PATH environment variable.  You'll need to go to the `System` section of your control panel.  You can search for it.  In the picture below, it's the second option.

![alt text](https://i.imgur.com/BWA8QDF.png)

Go to `advanced system settings`.

![alt text](https://i.imgur.com/kjGOVGb.png)

Click `environment variables` on the bottom right.

![alt text](https://i.imgur.com/jmOwmFa.png)

Under `system variables` at the bottom, find `Path`.  Highlight it and press `edit`.

![alt text](https://i.imgur.com/HTS76WV.png)

On the resulting screen, click `new` on the top right.

![alt text](https://i.imgur.com/6C69SoU.png)

Type in the path to the folder containing tweego.  If you did this like I did, you'll type in `C:\tweego\`.

![alt text](https://i.imgur.com/7rDJ22z.png)

Click OK when you're done, but don't close the Environment Variables window yet!

### Step 4: Add the TWEEGO_PATH variable

This step is optional but recommended.  You may as well do it while you're here to prevent potential headaches later.

Back in the Environment Variables window, click `New`.

![alt text](https://i.imgur.com/LnZ3chF.png)

Set the variable name to `TWEEGO_PATH` and the value to the path that leads to your `story-formats` folder.  If you set it up the same way I did, that path will be `C:\tweego\story-formats`

![alt text](https://i.imgur.com/vJrHaLe.png)

### Step 5: Testing Tweego

Open a command prompt and type `tweego`.  If the command is unrecognized, something was messed up, otherwise, an explanation of tweego should print out.  Type in `tweego --list-formats` to make sure you've installed all the formats correctly and set up `TWEEGO_PATH` correctly.  It should display all the formats you have in your `story-formats` directory.