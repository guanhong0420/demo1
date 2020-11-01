var btn = document.querySelector('.btnClass');
btn.addEventListener('click',function(){
let str = document.querySelector('.date').value;
let strmid = document.querySelector('.text').value;
let strbot = document.querySelector('.textbot').value;
         
if (str === '') {
  let popUpdate = document.getElementById('popupcontentdate');
  popUpdate.style.top = "35%";//視窗距離瀏覽器內容區最上方的偏移值
  popUpdate.style.left = "30%";//視窗距離瀏覽器內容區最左邊的偏移值
  popUpdate.style.width = "45%";//視窗的寬度
  popUpdate.style.height = "30%";//視窗的高度
  popUpdate.style.visibility = "visible";
} else if(strmid === ''){
  let popUpmeal = document.getElementById('popupcontentmeal');
  popUpmeal.style.top = "35%";//視窗距離瀏覽器內容區最上方的偏移值
  popUpmeal.style.left = "30%";//視窗距離瀏覽器內容區最左邊的偏移值
  popUpmeal.style.width = "45%";//視窗的寬度
  popUpmeal.style.height = "30%";//視窗的高度
  popUpmeal.style.visibility = "visible";
} else if (strbot === '') {
  let popUpres = document.getElementById('popupcontentres');
  popUpres.style.top = "35%";//視窗距離瀏覽器內容區最上方的偏移值
  popUpres.style.left = "30%";//視窗距離瀏覽器內容區最左邊的偏移值
  popUpres.style.width = "45%";//視窗的寬度
  popUpres.style.height = "30%";//視窗的高度
  popUpres.style.visibility = "visible";
} else {
  let popUpsucc = document.getElementById('popupcontentsucc');
  popUpsucc.style.top = "35%";//視窗距離瀏覽器內容區最上方的偏移值
  popUpsucc.style.left = "30%";//視窗距離瀏覽器內容區最左邊的偏移值
  popUpsucc.style.width = "45%";//視窗的寬度
  popUpsucc.style.height = "30%";//視窗的高度
  popUpsucc.style.visibility = "visible";
  localStorage.setItem('date', str);
  localStorage.setItem('meal', strmid);
  localStorage.setItem('feedback',strbot);
  document.querySelector('.date').value = "";
  document.querySelector('.text').value = "";
  document.querySelector('.textbot').value = "";//把值清空
}}, false)
       
let close = document.querySelectorAll('.close');
close.forEach(function(close){
close.addEventListener('click',function(){
  let popUpdate = document.getElementById('popupcontentdate');
  let popUpmeal = document.getElementById('popupcontentmeal');
  let popUpres = document.getElementById('popupcontentres');
  let popUpsucc = document.getElementById('popupcontentsucc');
  popUpdate.style.visibility = "hidden";
  popUpmeal.style.visibility = "hidden";
  popUpres.style.visibility = "hidden";
  popUpsucc.style.visibility = "hidden";
},false)})
      

   
      