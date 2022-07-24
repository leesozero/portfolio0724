$(document).ready(
    function(){
        
      $('#banner').css('opacity',0) //투명하게 처리해라

      $('#banner').animate({ // 2초를 들여서 점점 나타나라
        "opacity" : 1

      },2000,function(){
        $(this).html('애니메이션 끝나고 나는 나타나겠지')
      })
        
    }
)  












