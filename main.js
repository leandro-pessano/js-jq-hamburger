$(document).ready(function() {

  $('.header-right a:last-child').click(function() {
    $('.hamburger-menu').show();
  });

  $('.hamburger-menu a i').click(function() {
    $('.hamburger-menu').hide();
  });

});
