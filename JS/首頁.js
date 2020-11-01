var now=0;  //當前的索引
var pic = new Array(); //陣列，用來存放圖片
pic[0] = "./img/LOGO/1.jpg";
pic[1] = "./img/LOGO/2.jpg";
function scrollPic(){ 
if(now>pic.length-1){ //如果當前函式超過陣列下標的最大值，now=0
now=0;
}
    for (var i = 0; i < pic.length; i++) { //遍歷陣列
        if (i == now) { //如果當前索引等於當前陣列下標
            document.getElementById("img").src = pic[i]; //改變圖片路徑
        }
    }
now++  ; //now++,執行下一次操作
}
setInterval("scrollPic()",3000); //設定定時器