$(function(){
    $('#fullpage').fullpage({
        verticalCentered: false,
        sectionsColor: ['#FFAD0C', '#27496C', '#87B2FF', '#9966CC', '#CC6699', '#4BB0DC'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],

        navigationColor: 'red',
        scrollBar: true,
        slidesNavigation: true,
        afterLoad:function(anchorLink,index){
            if(index == 1){
                $('.logo').addClass('animated bounceInDown');
                $('.date').addClass('animated slideInLeft');
                $('.fly').addClass('animated slideInRight');
                $('.ready').addClass('animated bounceInUp');
            }
            if(index == 2){
                //$('.fp-slidesNav').hide();
                //$('.fp-controlArrow').show();

                $('.section2 a:eq(0)').click(function(){
                    $('.section2 .col-md-9').each(function(){
                        $(this).hide();
                    })
                    $('.section2 .col-md-9:eq(0)').show();
                })
                $('.section2 a:eq(1)').click(function(){
                    $('.section2 .col-md-9').each(function(){
                        $(this).hide();
                    })
                    $('.section2 .col-md-9:eq(1)').show();
                })
                $('.section2 a:eq(2)').click(function(){
                    $('.section2 .col-md-9').each(function(){
                        $(this).hide();
                    })
                    $('.section2 .col-md-9:eq(2)').show();
                })
            }
            if(index == 3){
                //$('.fp-slidesNav').show();
                //$('.fp-controlArrow').hide();

            }
            if(index == 6){
                $('.firstLine').addClass('animated lightSpeedIn');
                $('.secondLine').addClass('animated flipInX');
                $('.thirdLine').addClass('animated rotateIn');
                $('.apply').addClass('animated fadeInUpBig');

            }
        },
        onLeave:function(anchorLink,index){
            if(index == 1){
                $('.logo').removeClass('animated bounceInDown');
                $('.date').removeClass('animated slideInLeft');
                $('.fly').removeClass('animated slideInRight');
                $('.ready').removeClass('animated bounceInUp');
            }
            if(index == 6){
                $('.firstLine').removeClass('animated lightSpeedIn');
                $('.secondLine').removeClass('animated flipInX');
                $('.thirdLine').removeClass('animated rotateIn');
                $('.apply').removeClass('animated fadeInUpBig');

            }
        },

    });



    var oMask = $('.mask');
    $('.moreBtn').each(function(index){

        var mores = $('.moreCon');
        this.onclick = function(){
            $('.moreCon').each(function(){
                $(this).hide();

            })
            $(mores[index]).show();
            oMask.show();
        }
    })
    $('.more').each(function(index){
        var mores = $('.moreCon');
        this.onclick = function(){
            $('.moreCon').each(function(){
                $(this).hide();
            })
            $(mores[index]).show();
            oMask.show();

        }
    })
//    点击关闭按钮
    $('.closePic').each(function(index){
        var mores = $('.moreCon');
        this.onclick = function(){
            mores[index].style.display = "none";
            oMask.hide();

        }
    })
//    动画

})