"use strict";

//nav
var windowWidth;
$(function () {
    windowWidth = $(window).width();

    $(window).resize(function () {
        windowWidth = $(window).width();

        if (960 < windowWidth) {
            $("header .nav > ul li.dep02 .dep03").css({ "display": "block" });
        }
        if (windowWidth < 960) {
            $("header .nav > ul li.dep02 .dep03").css({ "display": "none" });
        }

    });



    $("nav > ul li.dep02").mouseover(function () {
        if (960 < windowWidth) {
            $(this).addClass("active");
        }
    }).mouseleave(function () {
        if (960 < windowWidth) {
            $(this).removeClass("active");
        }
    });


    $(".m-btn-nav").click(function () {
        mBtnNav();
    });

    $("nav > ul li.dep02 h2").each(function (idx, element) {

        $(element).click(function () {
            if (960 < windowWidth)
                return;


            navClass = $("a", this).attr('class');
            if (navClass == "active") {
                $("nav > ul li.dep02 h2 a").removeClass("active");
            } else {
                $("nav > ul li.dep02 h2 a").removeClass("active");
                $("a", this).toggleClass("active");
            }


            $("nav > ul li.dep02 .dep03").slideUp();
            if ($(this).next(".dep03").css("display") == "none") {
                $(this).next(".dep03").slideDown();
            }
        });

    });
});


function mBtnNav() {
    $("nav > ul").toggleClass("active");
    $("header").toggleClass("active");
}

// gnb 스크롤 시

var naviOffset = $('header').offset();

if (960 < windowWidth) {
    $(window).scroll(function () {
        if ($(document).scrollTop() > naviOffset.top) {
            $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
                'background': 'rgba(0, 0, 39, 1)'
            });
        } else if ($(document).scrollTop() > 0) {
            $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
                'background': 'rgba(0, 0, 39, 1)'
            });
        } else {
            $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
                'background': 'rgba(255, 255, 255, 0.15)'
            });
        }
    });
} else if (960 > windowWidth) {
    $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
        'background': 'rgba(255, 255, 255, 1)'
    });
}

$(window).resize(function () {
    var naviOffset = $('header').offset();

    if (960 < windowWidth) {
        $(window).scroll(function () {
            if ($(document).scrollTop() > naviOffset.top) {
                $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
                    'background': 'rgba(0, 0, 39, 1)'
                });
            } else if ($(document).scrollTop() > 0) {
                $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
                    'background': 'rgba(0, 0, 39, 1)'
                });
            } else {
                $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
                    'background': 'rgba(255, 255, 255, 0.15)'
                });
            }
        });
    } else if (960 > windowWidth) {
        $('nav > ul li.dep02 h2 ~ ul.dep03 li').css({
            'background': 'rgba(255, 255, 255, 1)'
        });
    }

}).resize()