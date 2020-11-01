var area = document.getElementById('areaID');
        var list = document.querySelector('.listID');
        var country = [
            { city: '台北', addr: '台北市中正區八德路一段64號', },
            { city: '台北', addr: '台北市中正區南昌路一段12號', },
            { city: '台北', addr: '台北市大同區承德路一段38號', },
            { city: '台北', addr: '台北市中山區南京東路三段222號', },
            { city: '台北', addr: '台北市中山區八德路二段306號B1', },
            { city: '台北', addr: '台北市中山區民生西路9號', },
            { city: '台北', addr: '台北市信義區忠孝東路五段297號B1', }, 
            { city: '台中', addr: '台中市中區台灣大道一段38號', },
            { city: '台中', addr: '台中市東區復興路四段108號', },
            { city: '台中', addr: '台中市西區公益路163號', },
            { city: '台中', addr: '台中市北屯區文心路四段520號', },
            { city: '台中', addr: '台中市北屯區崇德路三段463號', },
            { city: '台中', addr: '台中市西屯區文心路3段119-1號', },
            { city: '台中', addr: '台中市西屯區福星北路1號 1~2樓', },
            { city: '高雄', addr: '高雄市苓雅區五福一路22號', },
            { city: '高雄', addr: '高雄市鼓山區青海路151號', },
            { city: '高雄', addr: '高雄市楠梓區後昌新路20號', },
            { city: '高雄', addr: '高雄市左營區崇德路311號', },
            { city: '高雄', addr: '高雄市鳳山區青年路二段313號', },
            { city: '高雄', addr: '高雄市苓雅區三多二路193號', },
            { city: '高雄', addr: '高雄市前鎮區中華五路1111號', },
        ]
        var Len = country.length;
        function updatelist(e){
            var select = e.target.value;//我現在選到的值
            var str = '';//組字串用
             for(var i = 0; i < Len; i++){
                 if(select == country[i].city){
                     str += '<li>'+country[i].addr+'</li>';
                 }
             }
             list.innerHTML = str;
        }
        area.addEventListener('change',updatelist,false);