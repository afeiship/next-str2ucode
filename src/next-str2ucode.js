(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_CODE = '\u200b';

  nx.str2ucode = function(inString, inCode) {
    var code = inCode || DEFAULT_CODE;
    return code + inString + code;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.str2ucode;
  }
})();
