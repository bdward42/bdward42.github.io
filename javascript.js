<script scr=""https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
$('document').ready(function(){
  $('#dropdown').hide();
  $("#menu-toggle").on("click", () => $('#dropdown').slideToggle());
  
  $('.dropdown-button').on("click", () => $('#dropdown').slideUp());
  
  $('.card').on('mouseenter', () => $('#dropdown').slideUp());
});