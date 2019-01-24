$('document').ready(function(){
  // add current year to footer
  var currentYear = new Date().getFullYear();
  $('#uCYear').text(currentYear);

  // add 100 items to grid container
  $('#grid-container').each(function(){
    var gridItems = "";
    for(i=1;i<=100;i++){
      if (i == 50) {
        gridItems += '<div class="grid-item"><span><i class="fa fa-star"></i></span></div>';
      } else {
        gridItems += '<div class="grid-item"><span>'+i+'</span></div>';
      }
    }
    $(this).append(gridItems);
  });


  // $('.mobile-menu').on('click', function(){
  //   $(this).toggleClass('open');
  // };
  $('.mobile-menu').click(function(){
    $(this).toggleClass('open');
  })
});
