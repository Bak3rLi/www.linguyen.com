function showMenu(menuOption) {
  $('.sub-menu').hide();
  menuOption.nextUntil("main-menu").slideDown( "fast", function() {
    // Animation complete.
  });
}

function get_filename(url) {
  return url.split('#').shift().split('?').shift().split('/').pop();
}

function initMenu() {
  current_page = get_filename(document.location.pathname);
  alert(current_page);
  $('.main-menu').each(function(i, obj) {
    alert("HREF:" + get_filename(obj.children("a").href));
});
}
