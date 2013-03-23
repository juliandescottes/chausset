chausset
========

Chausset is a bookmarklet that lets you take screenshots of a web page (based on [html2canvas](http://html2canvas.hertzen.com/)). You will get a url to share your screenshot easily.

Install Chausset
================

Save the url found in [bookmarklet.url](https://raw.github.com/juliandescottes/chausset/master/build/bookmarklet.url) as a bookmark in your browser (unfortunately, github doesn't support javascript urls in the readme.md for security reasons so I can't put a direct link here).

Use Chausset
============
1. Go to any web page.
2. Click on your chausset bookmarklet
3. Wait for Chausset to load and to capture your page (you will get a notification when it's ready)
4. Draw a rectangle to select the area to capture (chausset doesn't do fullscreen for now)
5. Chausset will open a popup to your image (check you are not blocking popups !)
6. Copy the image, or just grab the url and that's it

Contribute
==========

1. Install packman `sudo npm install -g packman`
2. Build by running `packman` in the root dir
3. Whatever

Acknowledgements
================
1. All the heavy lifting of doing the screenshot on the client side is done using [html2canvas](http://html2canvas.hertzen.com/)
2. [YQL](http://developer.yahoo.com/yql/) is used to proxy cross-domain images

Known Issues
============
Too many to list for now. Just an early stage prototype so far.
