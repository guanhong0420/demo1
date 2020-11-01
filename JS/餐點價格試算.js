var num = document.querySelectorAll('.num');
var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
let order = [];
num.forEach(function (num, index) {
    var number = num.value;
    plus[index].addEventListener('click', function () {
        number++;
        num.value = number;
    }, false);
    minus[index].addEventListener('click', function () {
        if (number > 0) {
            number--;
            num.value = number;
        } else {
            num.value = 0
        };
    });
});
var count = document.querySelector('#count');
count.addEventListener('click', function () {
    order = [];//對order做初始化
    var single1 = parseInt(document.getElementById('single1').value) * 180;
    var single2 = parseInt(document.getElementById('single2').value) * 170;
    var single3 = parseInt(document.getElementById('single3').value) * 170;
    var single4 = parseInt(document.getElementById('single4').value) * 190;
    var single5 = parseInt(document.getElementById('single5').value) * 150;
    var single6 = parseInt(document.getElementById('single6').value) * 160;
    var single7 = parseInt(document.getElementById('single7').value) * 150;
    var single8 = parseInt(document.getElementById('single8').value) * 150;
    var single9 = parseInt(document.getElementById('single9').value) * 160;
    var multi1 = parseInt(document.getElementById('multi1').value) * 320;
    var multi2 = parseInt(document.getElementById('multi2').value) * 280;
    var multi3 = parseInt(document.getElementById('multi3').value) * 300;
    var multi4 = parseInt(document.getElementById('multi4').value) * 290;
    var multi5 = parseInt(document.getElementById('multi5').value) * 380;
    var multi6 = parseInt(document.getElementById('multi6').value) * 420;
    var multi7 = parseInt(document.getElementById('multi7').value) * 330;
    var multi8 = parseInt(document.getElementById('multi8').value) * 240;
    var multi9 = parseInt(document.getElementById('multi9').value) * 360;
    var one1 = parseInt(document.getElementById('one1').value) * 75;
    var one2 = parseInt(document.getElementById('one2').value) * 110;
    var one3 = parseInt(document.getElementById('one3').value) * 90;
    var one4 = parseInt(document.getElementById('one4').value) * 85;
    var one5 = parseInt(document.getElementById('one5').value) * 90;
    var one6 = parseInt(document.getElementById('one6').value) * 120;
    var one7 = parseInt(document.getElementById('one7').value) * 95;
    var one8 = parseInt(document.getElementById('one8').value) * 100;
    var one9 = parseInt(document.getElementById('one9').value) * 80;
    
    
    // var no1 = one8 != 0 ? one8 + '個' +  document.getElementById('no1').textContent : '';
    // var no2 = one9 != 0 ? one9 + '個' + document.getElementById('no2').textContent : '';
    // document.getElementById('item').textContent = no1 + ' // ' + no2;
    num.forEach(numName => {
        numName.value > 0 ? order.push(numName.parentNode.children[0].textContent + " x " + numName.value) : ""
    })
    
    order = [...new Set(order)];//相同品名只會取一個
    document.getElementById('item').textContent = order.join(',');
                                                //原本就是陣列會有逗號，join是取消
    
    
    var singleMoney = single1 + single2 + single3 + single4 + single5 + single6 + single7 + single8 + single9;
    var multiMoney = multi1 + multi2 + multi3 + multi4 + multi5 + multi6 + multi7 + multi8 + multi9;
    var oneMoney = one1 + one2 + one3 + one4 + one5 + one6 + one7 + one8 + one9;
    var totalMoney = singleMoney + multiMoney + oneMoney ;
    document.getElementById('total').textContent = totalMoney; 
    if (totalMoney == 0) {
        document.getElementById('item').textContent = '請選擇餐點';
    }}, false);

