$('document').ready(function(){
  // add current year to footer
  $('#cYear').text(new Date().getFullYear());

  // add grid-items to grid-container
  $('#grid-container').each(function(){
    var gridItems = '';
    for(i=1;i<=110;i++){
      switch (i) {
        case 1:
          // hideshow
          gridItems += '<div class="grid-item grid-button hideshow"><span><i class="fa fa-toggle-on"></i><i class="fa fa-toggle-off"></i></span></div>';
          break;
        case 12:
          // dark mode
          gridItems += '<div class="grid-item grid-button darkmode"><span id="dmode"><i class="fa fa-moon-o">';
          gridItems += '</i><span>dark mode</span></span><span id="lmode"><i class="fa fa-sun-o"></i><span>light mode</span></span></div>';
          break;
        case 23:
          // shownums
          gridItems += '<div class="grid-item grid-button shownums"><span><i class="fa fa-hashtag"></i></span></div>';
          break;
        case 34:
          // showgrid
          gridItems += '<div class="grid-item grid-button showgrid"><span><i class="fa fa-th"></i></span></div>';
          break;
        case 45:
          // countdown
          gridItems += '<div class="grid-item grid-button countdown"><span><i class="fa fa-clock-o"></i></span></div>';
          break;
        case 56:
          // fadeinout
          gridItems += '<div class="grid-item grid-button fadeinout"><span><i class="fa fa-bullseye"></i></span></div>';
          break;
        case 89:
          // primary-color
          gridItems += '<div class="grid-item grid-button primary-color"><input type="color" value="#000"></div>';
          break;
        case 78:
          // secondary-color
          gridItems += '<div class="grid-item grid-button secondary-color"><input type="color" value="#ff0000"></div>';
          break;
        case 100:
          // tertiary-color
          gridItems += '<div class="grid-item grid-button tertiary-color"><input type="color" value="#ffffff"></div>';
          break;
        case 67:
          // clear
          gridItems += '<div class="grid-item grid-button clear"><span><i class="fa fa-ban"></i></span></div>';
          break;
        default:
          gridItems += '<div class="grid-item"><span></span></div>';
      }
    }
    $(this).append(gridItems);

    // renumber the 100
    for (x=0;x<=$('.grid-item:not(.grid-button)').length;x++){
      $('.grid-item:not(.grid-button)').eq(x).attr('data-griditem',x+1);
      $('.grid-item:not(.grid-button) span').eq(x).html(x+1);
    }
  });

  // mobile hamburger menu functionality
  $('.mobile-menu').click(function(){
    $(this).toggleClass('open');
  });

  // add navigation links content hide/display functionality
  $('.nav-item').click(function(e){
    e.preventDefault();
    $('body').removeAttr('data-page').attr('data-page',$(this).attr('data-nav'));
    $('.mobile-menu').removeClass('open');
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
  });

  // generic addButton function for basic css based 'features'
  function addButton(selector,featureName){
    $(selector).click(function(){
      if ($(this).hasClass('clicked')){
        $('body').removeClass(featureName);
        $(this).removeClass('clicked');
      } else {
        $('body').addClass(featureName);
        $(this).addClass('clicked');
      }
    });
  }
  // hide/show
  addButton('.hideshow','hidecontent');
  // shownums
  addButton('.shownums','shownums');
  // showgrid
  addButton('.showgrid','showgrid');
  // fadeinout
  addButton('.fadeinout','fadeinout');


  // 'custom' buttons
  // dark mode
  $('.darkmode').click(function(){
    if ($('body').hasClass('light')){
      // light mode enabled, clear everything and turn dark mode on
      $('.grid-item:not(.grid-button)').unbind().removeClass('darkened');
      $('body > h1, footer > p, #main-nav > a').removeClass('darkened');
      $('body').removeClass('light').addClass('dark');
      $('.grid-item, body > h1, footer > p, #main-nav > a').hover(function(){
        $(this).addClass('darkened');
      });
    } else {
      // dark mode is enabled, turn off
      $('body').removeClass('dark').addClass('light');
      $('.grid-item, body > h1, footer > p, #main-nav > a').unbind('mouseenter mouseleave');
      $('body *').removeClass('darkened');
    }
  });

  // countdown
  var count = 0;
  function cycleGrid(){
    var oneSecond = setTimeout(function(){
      console.log('cycle count: '+count);
      var selection = $('.grid-item:not(.grid-button) span');
      if (count <= selection.length) {
        if (selection.eq(count).css('opacity') == 1){
          selection.eq(count).animate({opacity: 0}, 250);
          selection.eq(count).animate({opacity: 1}, 250);
          selection.eq(count).animate({opacity: 0}, 250);
          selection.eq(count).animate({opacity: 1}, 250);
        } else {
          selection.eq(count).animate({opacity: 1}, 250);
          selection.eq(count).animate({opacity: 0}, 250);
          selection.eq(count).animate({opacity: 1}, 250);
          selection.eq(count).animate({opacity: 0}, 250);
        }
        count++;
        cycleGrid();
      }
    }, 1000);
  }
  $('.countdown').click(function(){
    cycleGrid();
  });

  // clear
  $('.clear').click(function(){
      $('body').removeClass().addClass('light').attr('data-page','home');
      $('body *').removeClass('darkened');
      $('.grid-item, body > h1, footer > p, #main-nav > a').unbind('mouseenter mouseleave');
      //remove styles
      $('.grid-item span').removeAttr('style');
      // reset colors
      $('html').css({'--primary-color':'#000000','--secondary-color':'#ff0000','--tertiary-color':'#ffffff'});
      $('.primary-color input').val('#000000');
      $('.secondary-color input').val('#ff0000');
      $('.tertiary-color input').val('#ffffff')

  });

  // colors
  function colorBttns(s){
    $('.'+s+' input').change(function(){
      $('html').css('--'+s,$(this).val());
    });
  }
  colorBttns('primary-color');
  colorBttns('secondary-color');
  colorBttns('tertiary-color');


});
