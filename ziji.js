$(function(){
    $cover = $('.one img');
    var music = document.getElementById("play");
    isPlay = false;
    $(function(){
        $(".a").siblings().hide();
        $(".one").bind("click",function(){
            if (isPlay == false) {
                iplay();

            } else {
                nplay();

            }
            });
            if (isPlay == true) {
            } else {
            }

    });
//    播放
    function iplay() {
        $cover.addClass('cover-play');
        music.play();
        isPlay = true;
    }

//    暂停
    function nplay() {
        $cover.removeClass('cover-play');
        music.pause();
        isPlay = false;
    }

    })