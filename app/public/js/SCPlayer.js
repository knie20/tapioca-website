$(".sc-player-toggle").click(function(){
  $(".sc-player-wrapper").slideToggle('slow');

  if ($(this).hasClass('sc-player-open')){
    $(this).removeClass('sc-player-open');
    $(this).find("i").removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    $("sc-player-toggle-text").html(" Show Player");
  }else {
    $(this).addClass('sc-player-open');
    $(this).find("i").removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    $("sc-player-toggle-text").html(" Hide Player");
  }
});
