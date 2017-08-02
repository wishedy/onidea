/**
 * Created by 萤火虫 on 2017/8/1.
 */
$(document).ready(function(){
    console.log("进入");
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        direction : 'vertical',
        pagination : '.swiper-pagination',
    })
});