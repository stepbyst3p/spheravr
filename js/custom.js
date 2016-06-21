//var userLang = window.navigator.language;

if (window.navigator.language == 'ru') {
    $('.lang-en').show();
    $('.lang-ru').hide();
    $('body').addClass('ru');
}
if ((window.navigator.language == 'en-us') || (window.navigator.language == 'EN-US') || (window.navigator.language == 'EN-US') || (window.navigator.language == 'en-US') || (window.navigator.language == 'en')) {
    $('.lang-en').hide();
    $('.lang-ru').show();
    $('body').addClass('en');
}

$('.lang-ru').click(function () {
    $('body').removeClass('en');
    $('body').addClass('ru');
    $('.lang-en').show();
    $('.lang-ru').hide();
    return false;
});
$('.lang-en').click(function () {
    $('body').removeClass('ru');
    $('body').addClass('en');
    $('.lang-ru').show();
    $('.lang-en').hide();
    return false;
})


/*var playersrc=$('.ytplayer').attr('src');
$('.ytplayer').mouseover(function(){
$('.ytplayer').attr('src',playersrc+'&autoplay=1');
});
$('.ytplayer').mouseout(function(){
$('.ytplayer').attr('src',playersrc);
});*/

/*$(document).ready(function(){

$(".project-videobox").hover(
function() {
		var playersrc=$(this).children("iframe").attr('src');
    $(this).children("iframe").attr('src',playersrc+'&autoplay=1');

}, function() {		
		var playersrc=$(this).children("iframe").attr('src');
    $(this).children("iframe").attr('src',playersrc);
});
});*/





var figure = $(".video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('.t256__play-icon', this).hide();
    $('video', this).get(0).play();
    $('video').prop('muted', true);
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('.t256__play-icon', this).show();
}

var video = $('video')[0];
var videoJ = $('video');
videoJ.on('ended', function () {
    video.load();
});


$('.burger').click(function () {
    $('.t113__list').toggle()
});
