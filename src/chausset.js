(function(html2canvas) {
  var cropCanvas = function(sourceCanvas, x1, x2, y1, y2) {
    var width = x2 - x1,
      height = y2 - y1;

    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    context.drawImage(sourceCanvas, x1, y1, width, height, 0, 0, width, height);
    return canvas;
  };

  var _canvas = null,
    _overlay = null,
    _isCropping = false,
    _selectionRectangle = null,
    _cropData = null;

  var createOverlay = function(canvas) {
    var overlay = document.createElement("div");
    overlay.style.cssText = [
      "position:fixed",
      "height:100%", "width:100%",
      "top:0", "left:0",
      "z-index:100000"].join(";");
    overlay.onmousedown = startCropping;
    overlay.onmouseup = stopCropping;
    overlay.onmousemove = onOverlayMouseMove
    overlay.appendChild(canvas);
    document.body.appendChild(overlay);
    return overlay;
  };

  var createSelectionRectangle = function() {
    var selectionRectangle = document.createElement("div");
    selectionRectangle.style.cssText = [
      "position:fixed",
      "border : 2px dotted red",
      "z-index:100005"].join(";");
    selectionRectangle.onmousemove = onOverlayMouseMove;
    selectionRectangle.onmouseup = stopCropping;
    document.body.appendChild(selectionRectangle);
    return selectionRectangle;
  };

  var initializeCropData = function(event) {
    var x = event.clientX,
      y = event.clientY;
    _cropData = {};
    _cropData.x1 = _cropData.x2 = x, _cropData.y1 = _cropData.y2 = y;
  }

  var updateCropData = function(event) {
    var x = event.clientX,
      y = event.clientY;
    _cropData.x2 = x, _cropData.y2 = y;
  };

  var updateSelectionFromCropData = function(selection, cropData) {
    var fixedData = fixRectData(cropData);
    _selectionRectangle.style.top = fixedData.y1 + "px";
    _selectionRectangle.style.left = fixedData.x1 + "px";
    _selectionRectangle.style.height = fixedData.y2 - fixedData.y1 + "px";
    _selectionRectangle.style.width = fixedData.x2 - fixedData.x1 + "px";
  };

  var fixRectData = function(rectData) {
    var fixedData = {
      x1: Math.min(rectData.x1, rectData.x2),
      x2: Math.max(rectData.x1, rectData.x2),
      y1: Math.min(rectData.y1, rectData.y2),
      y2: Math.max(rectData.y1, rectData.y2),
    };
    return fixedData;
  };

  var startCropping = function(event) {
    _isCropping = true;
    _selectionRectangle = createSelectionRectangle();
    initializeCropData(event);
    updateSelectionFromCropData(_selectionRectangle, _cropData);
  };

  var onOverlayMouseMove = function(event) {
    if (_isCropping) {
      updateCropData(event);
      updateSelectionFromCropData(_selectionRectangle, _cropData);
    }
  };

  var stopCropping = function(event) {
    if (_isCropping) {
      _isCropping = false;
      var fixedData = fixRectData(_cropData);
      canvas = cropCanvas(_canvas, fixedData.x1, fixedData.x2, fixedData.y1, fixedData.y2);
      renderedImage = canvas.toDataURL("image/png");
      saveImage(renderedImage);
    }
  };
  var SERVICE_URL = "http://.appspot.com/";

  var saveImage = function(renderedImage) {
    var imageData = renderedImage.replace("data:image/png;base64,", "");
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append('data', imageData);
    xhr.open('POST', SERVICE_URL + "__/upload", true);
    xhr.onload = function(e) {
      window.open(SERVICE_URL + "img/" + this.responseText);
      _overlay.parentNode.removeChild(_overlay);
      _selectionRectangle.parentNode.removeChild(_selectionRectangle);
    };

    xhr.send(formData);
  };

  var onload = function() {
    // remove loader
    var loader = document.getElementById("chausset-loader");

    var proxyURL = "query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.uri%20where%20url%3D%40url&format=json",
      protocol = "http://";
    if (window.location.href.indexOf("https") == 0) {
      protocol = "https://";
    }
    // take screenshot
    html2canvas(
    document.body, {
      proxy: protocol + proxyURL,
      onrendered: function(canvas) {
        _canvas = canvas;
        _overlay = createOverlay(canvas);
        loader.style.opacity = 1;
        loader.innerHTML = "Screenshot ready, select the area to crop";
        window.setTimeout(function() {
          loader.style.opacity = 0;
        }, 2000);
        window.setTimeout(function() {
          loader.parentNode.removeChild(loader);
        }, 2500);

      }
    });
  };

  onload();
})(html2canvas)