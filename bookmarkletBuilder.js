module.exports.onFileContent = function(callback, config, fileObject) {
  fileObject.content = 'javascript:' + fileObject.content;
  callback();
};