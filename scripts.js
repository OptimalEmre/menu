$('#op-menu-open').click(function(event) {
  $("#op-menu-open").hide();
  $("#op-menu-close").show();

  $('#op-main-menu').slideDown();
  return false;
});

$('#op-menu-close').click(function(event) {
  $('#op-menu-close').hide();
  $("#op-menu-open").show();

  $('#op-main-menu').slideUp();
  return false;
});

$('.op-menu-trigger').click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).children('.op-submenu').slideToggle();
  
  return false;
});
