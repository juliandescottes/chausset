chausset
========

Chausset is a bookmarklet that lets you take screenshots of a web page (based on [html2canvas](http://html2canvas.hertzen.com/)). You will get a url to share your screenshot easily.

Install Chausset
================

Save the following url as a bookmark, or drag it to the links/bookmarks bar in your browser:

<code>javascript:(function(){loader=document.createElement('div');loader.style.cssText='z-index:100010;position:fixed;top:0;left:0;bottom:0;right:0;font-size:24px;text-align:center;padding-top:30px;background:rgba(255,255,255,0.7);';loader.innerHTML='loading chausset ...';loader.id="chausset-loader";document.body.appendChild(loader);document.body.appendChild(document.createElement('script')).src='https://raw.github.com/juliandescottes/chausset/master/build/chausset.js';})();</code>

(unfortunately, github doesn't support javascript urls in the readme.md for security reasons so I can't put a direct link here. FYI it is also available as a file in the repository [chausset.url](https://raw.github.com/juliandescottes/chausset/master/chausset.url))

Use Chausset
============
1. Go to any web page.
2. Click on your chausset bookmarklet
3. Wait for Chausset to load and to capture your page (you will get a notification when it's ready)
4. Draw a rectangle to select the area to capture (chausset doesn't do fullscreen for now)
5. Chausset will open a popup to your image (check you are not blocking popups !)
6. Copy the image, or just grab the url and that's it

Acknowledgements
================
1. All the heavy lifting of doing the screenshot on the client side is done using [html2canvas](http://html2canvas.hertzen.com/)
2. [YQL](http://developer.yahoo.com/yql/) is used to proxy cross-domain images

Known Issues
============
Too many to list for now. Just an early stage prototype so far.
