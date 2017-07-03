'use strict';

module.exports = function(s) {
  // don't lowercase initialisms
  if (/^[A-Z]{2}/.test(s)) {
    return s;
  }
  return s.substr(0, 1).toLowerCase() + s.substring(1);
};

