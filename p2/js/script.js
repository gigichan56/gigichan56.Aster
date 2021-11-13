$(document).ready(function(){
  
  /*header */
  $("#new").hover(function(){
    $("#new_line").toggleClass("header_line_hover");
   });

   /*$("#product").hover(function(){
    $("#product_line").toggleClass("header_line_hover");
   });*/

   $("#story").hover(function(){
    $("#story_line").toggleClass("header_line_hover");
   });

   $("#contact").hover(function(){
    $("#contact_line").toggleClass("header_line_hover");
   });


  /*區塊尺寸*/
   $(".potion").click(function(){
      $(".container").css("height", "1260");
  });

  $(".props").click(function(){
   $(".container").css("height", "760");
  });


  /*藥水 */
    $(".potion").click(function(){
        $(".main_area").html(
           `
           <div class=" items_box">
              <div class="items_img_box"><img src="../img/float_2.png"  class="items_img"></div>  
              <div class="items_name">飄浮藥水</div>
           </div>
           <div class=" items_box">
             <div class="items_img_box"><img src="../img/Invisible_2.png" class="items_img"></div>
             <div class="items_name">隱形藥水</div>
           </div>
           <div class=" items_box">
             <div class="items_img_box"><img src="../img/love_2.png" class="items_img" ></div>
             <div class="items_name">愛情靈藥</div>
           </div>
           <div class=" items_box">
             <div class="items_img_box"><img src="../img/cure_2.png" class="items_img"></div>
             <div class="items_name">治療藥水</div>
            </div>`
        );

        $(this).toggleClass("active");
        $(".props").removeClass("active");
    });


    /*道具 */
    $(".props").click(function(){
       $(".main_area").html(
           `<div class="proops_box">
              敬請期待
           </div>`
       );

       $(this).toggleClass("active");
       $(".potion").removeClass("active");

   });

});
