$(function(){
  

    $('#allBtn').click(function(){
       
        $(this).toggleClass('xi-close');
    })
     //전체버튼 클릭하면 xeicon의 닫기 클래스를 줬다 뺐다 해라

    
    var navitxt = [
        $('#skill h2').html(),
        $('#portfolio h2').html(),
        $('#interview h2').html(),
        $('#sns h2').html()
                    
    ]

    $('#gnb a').each(function(index,item){
        $(item).html(navitxt[index])
    })

    $('#gnb a').click(function(e){

        e.preventDefault(); 
        $('body, html').animate({scrollTop : $( $(this).attr('href')).offset().top },400,function(){

    });


})

})


    // 정렬과 each메서드
    // 태그에서 값을 관리하도록 해야 제일 잘한거! 웹디자이너 분이 수정하기 편하게
    // 태그의 data-  으로 생성한 옵션으로 값을 저장한다



