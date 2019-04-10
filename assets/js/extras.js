function get_filename(url) {
  return url.split('#').shift().split('?').shift().split('/').pop();
}

function initMenu(menu) {
  current_page = get_filename(document.location.pathname);
  $('.main-menu').each(function(i) {
    href = get_filename($(this).children("a")[0].href)
    if (href == current_page) {
      $(this).nextUntil("main-menu").slideDown("fast");
    }
  });
}
