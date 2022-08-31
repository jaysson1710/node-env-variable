(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["OS1"] = "${OS1}";
    window["env"]["debug"] = "${DEBUG}";
  })(this);