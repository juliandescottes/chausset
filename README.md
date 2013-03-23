chausset
========

Chausset is a bookmarklet that lets you take screenshots of a web page (based on [html2canvas](http://html2canvas.hertzen.com/)). You will get a url to share your screenshot easily.

Install Chausset
================

Create a bookmark with the following content : 

<code>javascript:(function(){loader=document.createElement('div');loader.style.cssText='z-index:100010;position:fixed;top:0;left:0;bottom:0;right:0;font-size:24px;text-align:center;padding-top:30px;background:rgba(255,255,255,0.7);';loader.innerHTML='loading chausset ...';loader.id="chausset-loader";document.body.appendChild(loader);document.body.appendChild(document.createElement('script')).src='https://raw.github.com/juliandescottes/chausset/master/build/chausset.js';})();</code>

Use Chausset
============
1. Go to any web page.
2. Click on your chausset bookmarklet
3. Wait for Chausset to load and to capture your page (you will get a notification once this is ready)
4. Draw a rectangle to select a particular area of the page
5. Chausset will open a popup to your image
6. Copy the image, or just grab the url and that's it
