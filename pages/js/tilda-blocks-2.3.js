 
function t113_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t113__list_item a[href='"+url+"']").addClass("t-active");
  $(".t113__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t113_showMenu(recid,pageid){
  var $flagmenudo = "2ok";
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 200) {
      if($flagmenudo != "1ok"){$flagmenudo="1";}
    }
    else {
      if($flagmenudo!="2ok"){$flagmenudo="2";}
    }

    if ($flagmenudo=="1") {
      $('.t113').addClass('t113__fixed');
      $('.t113').css('display','none');
      $('.t113').fadeIn( "slow" );

	  $('#rec'+recid).find('.t113__space').hide();
      $flagmenudo="1ok";
    }
    if ($flagmenudo=="2") {
      $('.t113').removeClass('t113__fixed');
	  $('#rec'+recid).find('.t113__space').show();
      $flagmenudo="2ok";
    }
  });

  var current_path = window.location.pathname.split('/').pop();
  if(current_path=="page"+pageid+".html"){
    $("#t113linktopage"+pageid).css("opacity",".7");
  }
}

function t113_setWidth(recid){
  var t113timer;
  var el=$('#rec'+recid);
  $(window).resize(function() {
    if(t113timer) {
        window.clearTimeout(t113timer);
    }
    t113timer = window.setTimeout(function() {
        if($(window).width()>640){
          var w1= el.find("div[data-hook-left]").width()+20+50;
          el.find(".t113__list").css("padding-right",w1+"px");
        }else{
          el.find(".t113__list").css("padding-right",10+"px");  
        }
    }, 100);
  });
  $(window).resize();
} 
function t142_checkSize(recid){
  var el=$("#rec"+recid).find(".t142__submit");
  if(el.length){
    var btnheight = el.height();
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t142__submit-overflowed");
      el.html("<span class=\"t142__text\">" + btntext + "</span>");
    }
  }
} 
window.t256showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t256__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t256__overflow");
		$("#rec"+recid+" .t256__cover").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t256__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t256__close-link\" href=\"javascript:t256hidevideo('"+recid+"');\"><div class=\"t256__close\"></div></a>");
    });
}

window.t256hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t256__overflow");
        $("#rec"+recid+" .t256__cover").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<div class=\"t256__video-bg2\"></div>");
    });
} 
    var t279 = {};
    
    t279.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t279__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
