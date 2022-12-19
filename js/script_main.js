//1.gnb 마우스오버, 포커스시 밑줄 => span.bar
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar =$(this).position().left; //.gnb li a 왼쪽 값
        var widNum = $(this).width(); // . gnb li a의 길이(오른쪽 값)
        $('span.bar').css({'left':bar + 'px', 'width':widNum+'px', 'opacity':1});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':0, 'width':0, 'opacity':0});
    })
});