$(function() {
  var tmax_optionsGlobal = {
    repeat: -1,
    repeatDelay: 0.65,
    yoyo: true
  };

  CSSPlugin.useSVGTransformAttr = true;

  var tl = new TimelineMax(tmax_optionsGlobal),
      path = 'svg *',
      stagger_val = 0.0125,
      duration = 2;

  $.each($(path), function(i, el) {
    tl.set($(this), {
      x: '+=' + getRandom(-500, 500),
      y: '+=' + getRandom(-500, 500),
      rotation: '+=' + getRandom(-720, 720),
      scale: 0,
      opacity: 0
    });
  });

  var stagger_opts_to = {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: Power4.easeInOut
  };

  tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

  var $svg = $('svg');
  $svg.hover(
    function() {
      tl.timeScale(0.15);
    },
    function() {
      tl.timeScale(1);
    });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  var $card = $(".card")
  
  $("#button-xs").on("mouseup",function(){
    $("#face-xs").show();
    $("#face-team").hide();
    $("#face-missie").hide();
  })
  $("#button-team").on("mouseup",function(){
    $("#face-xs").hide();
    $("#face-team").show();
    $("#face-missie").hide();
  })
  $("#button-missie").on("mouseup",function(){
    $("#face-xs").hide();
    $("#face-team").hide();
    $("#face-missie").show();
  })

  $(".flip-button").on("mouseup",function(){
    $card.toggleClass("is-flipped");
    if ($card.hasClass('flip-back')) {
      $card.removeClass('flip-back')
    }
  })

  $(".flip-back-button").on("mouseup",function(){
    $card.toggleClass("flip-back");
    $card.toggleClass("is-flipped");
  })

  $(".person").click(function(){
    $(".person").removeClass("active");
    $(this).addClass("active");
 });

  
});