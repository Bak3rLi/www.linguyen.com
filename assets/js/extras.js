function get_filename(url) {
  return url.split('#').shift().split('?').shift().split('/').pop();
}

function initMenu() {
  $('.main-menu').each(function(i) {
    if ($(this).children("a")[0].href == document.location.href) {
      $(this).nextUntil(".main-menu").attr("style", "display: block !important");
    }
  });
}
