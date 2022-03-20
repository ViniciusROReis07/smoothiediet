(function () {
  if (document.compatMode === "CSS1Compat") {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "https://prod.cbstatic.net/dist/injectable.js";
    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(js, head.childNodes[0]);
    var cbtbLoaded = false;
    js.onload = js.onreadystatechange = function () {
      if (
        cbtbLoaded === false &&
        (!this.readyState ||
          this.readyState == "loaded" ||
          this.readyState == "complete")
      ) {
        cbtbLoaded = true;
        var clientLocale = "en";
        if (
          window.navigator.languages &&
          window.navigator.languages.length > 0
        ) {
          clientLocale = window.navigator.languages[0];
        } else {
          clientLocale = window.navigator.language
            ? window.navigator.language
            : window.navigator.userLanguage;
        }
        clientLocale = clientLocale ? clientLocale.substring(0, 2) : "en";
        window.cbtb({
          distUrl: "https://prod.cbstatic.net/dist/",
          theme: "white",
          position: "bottom-right",
          type: "tab",
          locale: clientLocale,
        });
      }
    };
  }
})();
