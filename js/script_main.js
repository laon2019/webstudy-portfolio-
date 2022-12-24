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


//circleBox SVG길이구하기
$(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length); 길이값 확인
    });
});

//스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once : true //스크롤시 딱 한번만 하고 싶을 땐 true ||  반복 : path
    });
});