$('.op-menu-icons').click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(".op-navlist").slideToggle(200);
  return false;
});

$('#show-menu-1').click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $("#submenu-1").slideToggle(200);
  return false;

});