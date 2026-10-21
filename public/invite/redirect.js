(function () {
  var params = new URLSearchParams(window.location.search);
  var code = params.get('code');
  var codeElement = document.getElementById('invitation-code');
  var codeContainer = document.getElementById('invitation-code-container');
  if (code && codeElement && codeContainer) {
    codeElement.textContent = code;
    codeContainer.hidden = false;
  }
})();
