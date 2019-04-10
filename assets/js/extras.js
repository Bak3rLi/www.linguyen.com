function showMenu(menuOption) {
  $('.sub-menu').hide();
  menuOption.nextUntil("main-menu").slideDown( "fast", function() {
    // Animation complete.
  });
}
