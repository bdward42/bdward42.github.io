$('document').ready(function(){
  $('#dropdown').hide();
  $("#menu-toggle").on("click", () => $('#dropdown').slideToggle());
  
  $('.dropdown-button').on("click", () => $('#dropdown').slideUp());
  
  $('.card').on('mouseenter', () => $('#dropdown').slideUp());
});