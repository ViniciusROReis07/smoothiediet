jQuery(window).load(function () {
  jQuery(".model-overlay.active .model-box").remove();
  jQuery(window).on("scroll resize", function () {
    var windowWidth = jQuery(window).width();
    if (jQuery(this).scrollTop() > 800 && windowWidth > 767) {
      jQuery(".video-wrapper").addClass("show-small-video");
    } else {
      jQuery(".video-wrapper").removeClass("show-small-video");
    }
  });
  jQuery(".model-box .close, .thank-model-box .close").on("click", function () {
    jQuery(".model-overlay").remove();
  });
  jQuery(".affiliates-id").on("keyup", function () {
    var currentId = jQuery(this).val();
    jQuery(".affiliates-gray-box a span").text(currentId);
    jQuery(".affiliates-gray-box a").each(function () {
      currentURL = jQuery(this).text();
      jQuery(this).attr("href", currentURL);
    });
  });
  setTimeout(function () {
    jQuery(".hidden-section").slideDown(500);
  }, 732000);
});
jQuery(window).on("load resize", function () {
  var windowWidth = jQuery(window).width();
  if (windowWidth < 768) {
    jQuery(".model-overlay").remove();
  }
});
