window.onload = function(){
    var pwdsa = document.getElementById("finalScoreShowArea");
    try {
        pwdsa.style.display="none";
    } catch (error) {
        
    }
    function shuffle (arr) {
        for (let i = 0, len = arr.length; i < len; i++) {
        let j = Math.floor(Math.random() * len)
        if (i !== j) [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    };
    var url = "https://raw.githubusercontent.com/Dtue/Lonndaoo/master/5%20%E9%99%84%E5%BD%95/documents.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var Ex = JSON.parse(request.responseText);
            for(var i=0;i<Ex.length;i++){
                console.log(Ex[i].name);
            }
            function radiusNum(){
                return Math.floor(Math.random()*3);
            }
            document.getElementById("restSpace").style.cssText = "background-image: url('img/"+Math.floor(Math.random()*59)+".jpg')";
            function exfirst(){
                window.e1num = radiusNum();
                console.log(e1num);
                document.getElementById("e1con").innerHTML = "<b>1.</b>" + Ex.Ex1[e1num].Title;
                var e1Sele = shuffle(Ex.Ex1[e1num].Selection);
                console.log(e1Sele);
                console.log(e1Sele[0].a);
                if (e1Sele[0].a != undefined){
                    document.getElementById("e1slt1").innerHTML = e1Sele[0].a;
                }else if (e1Sele[0].b != undefined){
                    document.getElementById("e1slt1").innerHTML = e1Sele[0].b;
                }else if (e1Sele[0].c != undefined){
                    document.getElementById("e1slt1").innerHTML = e1Sele[0].c;
                }else if (e1Sele[0].d != undefined){
                    document.getElementById("e1slt1").innerHTML = e1Sele[0].d;
                }
                if (e1Sele[1].a != undefined){
                    document.getElementById("e1slt2").innerHTML = e1Sele[1].a;
                }else if (e1Sele[1].b != undefined){
                    document.getElementById("e1slt2").innerHTML = e1Sele[1].b;
                }else if (e1Sele[1].c != undefined){
                    document.getElementById("e1slt2").innerHTML = e1Sele[1].c;
                }else if (e1Sele[1].d != undefined){
                    document.getElementById("e1slt2").innerHTML = e1Sele[1].d;
                }
                if (e1Sele[2].a != undefined){
                    document.getElementById("e1slt3").innerHTML = e1Sele[2].a;
                }else if (e1Sele[2].b != undefined){
                    document.getElementById("e1slt3").innerHTML = e1Sele[2].b;
                }else if (e1Sele[2].c != undefined){
                    document.getElementById("e1slt3").innerHTML = e1Sele[2].c;
                }else if (e1Sele[2].d != undefined){
                    document.getElementById("e1slt3").innerHTML = e1Sele[2].d;
                }
                if (e1Sele[3].a != undefined){
                    document.getElementById("e1slt4").innerHTML = e1Sele[3].a;
                }else if (e1Sele[3].b != undefined){
                    document.getElementById("e1slt4").innerHTML = e1Sele[3].b;
                }else if (e1Sele[3].c != undefined){
                    document.getElementById("e1slt4").innerHTML = e1Sele[3].c;
                }else if (e1Sele[3].d != undefined){
                    document.getElementById("e1slt4").innerHTML = e1Sele[3].d;
                }
            }
            function exsecond(){
                window.e2num = radiusNum();
                console.log(e2num);
                document.getElementById("e2con").innerHTML = "<b>2.</b>" + Ex.Ex2[e2num].Title;
                var e2Sele = shuffle(Ex.Ex2[e2num].Selection);
                console.log(e2Sele);
                console.log(e2Sele[0].a);
                if (e2Sele[0].a != undefined){
                    document.getElementById("e2slt1").innerHTML = e2Sele[0].a;
                }else if (e2Sele[0].b != undefined){
                    document.getElementById("e2slt1").innerHTML = e2Sele[0].b;
                }else if (e2Sele[0].c != undefined){
                    document.getElementById("e2slt1").innerHTML = e2Sele[0].c;
                }else if (e2Sele[0].d != undefined){
                    document.getElementById("e2slt1").innerHTML = e2Sele[0].d;
                }
                if (e2Sele[1].a != undefined){
                    document.getElementById("e2slt2").innerHTML = e2Sele[1].a;
                }else if (e2Sele[1].b != undefined){
                    document.getElementById("e2slt2").innerHTML = e2Sele[1].b;
                }else if (e2Sele[1].c != undefined){
                    document.getElementById("e2slt2").innerHTML = e2Sele[1].c;
                }else if (e2Sele[1].d != undefined){
                    document.getElementById("e2slt2").innerHTML = e2Sele[1].d;
                }
                if (e2Sele[2].a != undefined){
                    document.getElementById("e2slt3").innerHTML = e2Sele[2].a;
                }else if (e2Sele[2].b != undefined){
                    document.getElementById("e2slt3").innerHTML = e2Sele[2].b;
                }else if (e2Sele[2].c != undefined){
                    document.getElementById("e2slt3").innerHTML = e2Sele[2].c;
                }else if (e2Sele[2].d != undefined){
                    document.getElementById("e2slt3").innerHTML = e2Sele[2].d;
                }
                if (e2Sele[3].a != undefined){
                    document.getElementById("e2slt4").innerHTML = e2Sele[3].a;
                }else if (e2Sele[3].b != undefined){
                    document.getElementById("e2slt4").innerHTML = e2Sele[3].b;
                }else if (e2Sele[3].c != undefined){
                    document.getElementById("e2slt4").innerHTML = e2Sele[3].c;
                }else if (e2Sele[3].d != undefined){
                    document.getElementById("e2slt4").innerHTML = e2Sele[3].d;
                }
            }
            function exthird(){
                window.e3num = radiusNum();
                console.log(e3num);
                document.getElementById("e3con").innerHTML = "<b>3.</b>" + Ex.Ex3[e3num].Title;
                var e3Sele = shuffle(Ex.Ex3[e3num].Selection);
                console.log(e3Sele);
                console.log(e3Sele[0].a);
                if (e3Sele[0].a != undefined){
                    document.getElementById("e3slt1").innerHTML = e3Sele[0].a;
                }else if (e3Sele[0].b != undefined){
                    document.getElementById("e3slt1").innerHTML = e3Sele[0].b;
                }else if (e3Sele[0].c != undefined){
                    document.getElementById("e3slt1").innerHTML = e3Sele[0].c;
                }else if (e3Sele[0].d != undefined){
                    document.getElementById("e3slt1").innerHTML = e3Sele[0].d;
                }
                if (e3Sele[1].a != undefined){
                    document.getElementById("e3slt2").innerHTML = e3Sele[1].a;
                }else if (e3Sele[1].b != undefined){
                    document.getElementById("e3slt2").innerHTML = e3Sele[1].b;
                }else if (e3Sele[1].c != undefined){
                    document.getElementById("e3slt2").innerHTML = e3Sele[1].c;
                }else if (e3Sele[1].d != undefined){
                    document.getElementById("e3slt2").innerHTML = e3Sele[1].d;
                }
                if (e3Sele[2].a != undefined){
                    document.getElementById("e3slt3").innerHTML = e3Sele[2].a;
                }else if (e3Sele[2].b != undefined){
                    document.getElementById("e3slt3").innerHTML = e3Sele[2].b;
                }else if (e3Sele[2].c != undefined){
                    document.getElementById("e3slt3").innerHTML = e3Sele[2].c;
                }else if (e3Sele[2].d != undefined){
                    document.getElementById("e3slt3").innerHTML = e3Sele[2].d;
                }
                if (e3Sele[3].a != undefined){
                    document.getElementById("e3slt4").innerHTML = e3Sele[3].a;
                }else if (e3Sele[3].b != undefined){
                    document.getElementById("e3slt4").innerHTML = e3Sele[3].b;
                }else if (e3Sele[3].c != undefined){
                    document.getElementById("e3slt4").innerHTML = e3Sele[3].c;
                }else if (e3Sele[3].d != undefined){
                    document.getElementById("e3slt4").innerHTML = e3Sele[3].d;
                }
            }
            function exfourth(){
                window.e4num = radiusNum();
                console.log(e4num);
                document.getElementById("e4con").innerHTML = "<b>4.</b>" + Ex.Ex4[e4num].Title;
                var e4Sele = shuffle(Ex.Ex4[e4num].Selection);
                console.log(e4Sele);
                console.log(e4Sele[0].a);
                if (e4Sele[0].a != undefined){
                    document.getElementById("e4slt1").innerHTML = e4Sele[0].a;
                }else if (e4Sele[0].b != undefined){
                    document.getElementById("e4slt1").innerHTML = e4Sele[0].b;
                }else if (e4Sele[0].c != undefined){
                    document.getElementById("e4slt1").innerHTML = e4Sele[0].c;
                }else if (e4Sele[0].d != undefined){
                    document.getElementById("e4slt1").innerHTML = e4Sele[0].d;
                }
                if (e4Sele[1].a != undefined){
                    document.getElementById("e4slt2").innerHTML = e4Sele[1].a;
                }else if (e4Sele[1].b != undefined){
                    document.getElementById("e4slt2").innerHTML = e4Sele[1].b;
                }else if (e4Sele[1].c != undefined){
                    document.getElementById("e4slt2").innerHTML = e4Sele[1].c;
                }else if (e4Sele[1].d != undefined){
                    document.getElementById("e4slt2").innerHTML = e4Sele[1].d;
                }
                if (e4Sele[2].a != undefined){
                    document.getElementById("e4slt3").innerHTML = e4Sele[2].a;
                }else if (e4Sele[2].b != undefined){
                    document.getElementById("e4slt3").innerHTML = e4Sele[2].b;
                }else if (e4Sele[2].c != undefined){
                    document.getElementById("e4slt3").innerHTML = e4Sele[2].c;
                }else if (e4Sele[2].d != undefined){
                    document.getElementById("e4slt3").innerHTML = e4Sele[2].d;
                }
                if (e4Sele[3].a != undefined){
                    document.getElementById("e4slt4").innerHTML = e4Sele[3].a;
                }else if (e4Sele[3].b != undefined){
                    document.getElementById("e4slt4").innerHTML = e4Sele[3].b;
                }else if (e4Sele[3].c != undefined){
                    document.getElementById("e4slt4").innerHTML = e4Sele[3].c;
                }else if (e4Sele[3].d != undefined){
                    document.getElementById("e4slt4").innerHTML = e4Sele[3].d;
                }
            }
            function exfifth (){
                window.e5num = radiusNum();
                console.log(e5num);
                document.getElementById("e5con").innerHTML = "<b>5.</b>" + Ex.Ex5[e5num].Title;
                var e5Sele = shuffle(Ex.Ex5[e5num].Selection);
                document.getElementById("e5img").src = Ex.Ex5[e5num].ImageURL; 
                console.log(e5Sele);
                console.log(e5Sele[0].a);
                if (e5Sele[0].a != undefined){
                    document.getElementById("e5slt1").innerHTML = e5Sele[0].a;
                }else if (e5Sele[0].b != undefined){
                    document.getElementById("e5slt1").innerHTML = e5Sele[0].b;
                }else if (e5Sele[0].c != undefined){
                    document.getElementById("e5slt1").innerHTML = e5Sele[0].c;
                }else if (e5Sele[0].d != undefined){
                    document.getElementById("e5slt1").innerHTML = e5Sele[0].d;
                }
                if (e5Sele[1].a != undefined){
                    document.getElementById("e5slt2").innerHTML = e5Sele[1].a;
                }else if (e5Sele[1].b != undefined){
                    document.getElementById("e5slt2").innerHTML = e5Sele[1].b;
                }else if (e5Sele[1].c != undefined){
                    document.getElementById("e5slt2").innerHTML = e5Sele[1].c;
                }else if (e5Sele[1].d != undefined){
                    document.getElementById("e5slt2").innerHTML = e5Sele[1].d;
                }
                if (e5Sele[2].a != undefined){
                    document.getElementById("e5slt3").innerHTML = e5Sele[2].a;
                }else if (e5Sele[2].b != undefined){
                    document.getElementById("e5slt3").innerHTML = e5Sele[2].b;
                }else if (e5Sele[2].c != undefined){
                    document.getElementById("e5slt3").innerHTML = e5Sele[2].c;
                }else if (e5Sele[2].d != undefined){
                    document.getElementById("e5slt3").innerHTML = e5Sele[2].d;
                }
                if (e5Sele[3].a != undefined){
                    document.getElementById("e5slt4").innerHTML = e5Sele[3].a;
                }else if (e5Sele[3].b != undefined){
                    document.getElementById("e5slt4").innerHTML = e5Sele[3].b;
                }else if (e5Sele[3].c != undefined){
                    document.getElementById("e5slt4").innerHTML = e5Sele[3].c;
                }else if (e5Sele[3].d != undefined){
                    document.getElementById("e5slt4").innerHTML = e5Sele[3].d;
                }
            }
            function exsixth (){
                window.e6num = radiusNum();
                console.log(e6num);
                document.getElementById("e6con").innerHTML = "<b>6.</b>" + Ex.Ex6[e6num].Title;
                var e6Sele = shuffle(Ex.Ex6[e6num].Selection);
                console.log(e6Sele);
                console.log(e6Sele[0].a);
                if (e6Sele[0].a != undefined){
                    document.getElementById("e6slt1").innerHTML = e6Sele[0].a;
                }else if (e6Sele[0].b != undefined){
                    document.getElementById("e6slt1").innerHTML = e6Sele[0].b;
                }else if (e6Sele[0].c != undefined){
                    document.getElementById("e6slt1").innerHTML = e6Sele[0].c;
                }else if (e6Sele[0].d != undefined){
                    document.getElementById("e6slt1").innerHTML = e6Sele[0].d;
                }
                if (e6Sele[1].a != undefined){
                    document.getElementById("e6slt2").innerHTML = e6Sele[1].a;
                }else if (e6Sele[1].b != undefined){
                    document.getElementById("e6slt2").innerHTML = e6Sele[1].b;
                }else if (e6Sele[1].c != undefined){
                    document.getElementById("e6slt2").innerHTML = e6Sele[1].c;
                }else if (e6Sele[1].d != undefined){
                    document.getElementById("e6slt2").innerHTML = e6Sele[1].d;
                }
                if (e6Sele[2].a != undefined){
                    document.getElementById("e6slt3").innerHTML = e6Sele[2].a;
                }else if (e6Sele[2].b != undefined){
                    document.getElementById("e6slt3").innerHTML = e6Sele[2].b;
                }else if (e6Sele[2].c != undefined){
                    document.getElementById("e6slt3").innerHTML = e6Sele[2].c;
                }else if (e6Sele[2].d != undefined){
                    document.getElementById("e6slt3").innerHTML = e6Sele[2].d;
                }
                if (e6Sele[3].a != undefined){
                    document.getElementById("e6slt4").innerHTML = e6Sele[3].a;
                }else if (e6Sele[3].b != undefined){
                    document.getElementById("e6slt4").innerHTML = e6Sele[3].b;
                }else if (e6Sele[3].c != undefined){
                    document.getElementById("e6slt4").innerHTML = e6Sele[3].c;
                }else if (e6Sele[3].d != undefined){
                    document.getElementById("e6slt4").innerHTML = e6Sele[3].d;
                }
            }
            function exseventh (){
                window.e7num = radiusNum();
                console.log(e7num);
                document.getElementById("e7con").innerHTML = "<b>7.</b>" + Ex.Ex7[e7num].Title;
                var e7Sele = shuffle(Ex.Ex7[e7num].Selection);
                console.log(e7Sele);
                console.log(e7Sele[0].a);
                if (e7Sele[0].a != undefined){
                    document.getElementById("e7slt1").innerHTML = e7Sele[0].a;
                }else if (e7Sele[0].b != undefined){
                    document.getElementById("e7slt1").innerHTML = e7Sele[0].b;
                }else if (e7Sele[0].c != undefined){
                    document.getElementById("e7slt1").innerHTML = e7Sele[0].c;
                }else if (e7Sele[0].d != undefined){
                    document.getElementById("e7slt1").innerHTML = e7Sele[0].d;
                }
                if (e7Sele[1].a != undefined){
                    document.getElementById("e7slt2").innerHTML = e7Sele[1].a;
                }else if (e7Sele[1].b != undefined){
                    document.getElementById("e7slt2").innerHTML = e7Sele[1].b;
                }else if (e7Sele[1].c != undefined){
                    document.getElementById("e7slt2").innerHTML = e7Sele[1].c;
                }else if (e7Sele[1].d != undefined){
                    document.getElementById("e7slt2").innerHTML = e7Sele[1].d;
                }
                if (e7Sele[2].a != undefined){
                    document.getElementById("e7slt3").innerHTML = e7Sele[2].a;
                }else if (e7Sele[2].b != undefined){
                    document.getElementById("e7slt3").innerHTML = e7Sele[2].b;
                }else if (e7Sele[2].c != undefined){
                    document.getElementById("e7slt3").innerHTML = e7Sele[2].c;
                }else if (e7Sele[2].d != undefined){
                    document.getElementById("e7slt3").innerHTML = e7Sele[2].d;
                }
                if (e7Sele[3].a != undefined){
                    document.getElementById("e7slt4").innerHTML = e7Sele[3].a;
                }else if (e7Sele[3].b != undefined){
                    document.getElementById("e7slt4").innerHTML = e7Sele[3].b;
                }else if (e7Sele[3].c != undefined){
                    document.getElementById("e7slt4").innerHTML = e7Sele[3].c;
                }else if (e7Sele[3].d != undefined){
                    document.getElementById("e7slt4").innerHTML = e7Sele[3].d;
                }
            }
            exfirst();
            exsecond();
            exthird();
            exfourth();
            exfifth();
            exsixth();
            exseventh();
            var je1c1 = document.getElementById("e1c1");
            var je1c2 = document.getElementById("e1c2");
            var je1c3 = document.getElementById("e1c3");
            var je1c4 = document.getElementById("e1c4");
            var je2c1 = document.getElementById("e2c1");
            var je2c2 = document.getElementById("e2c2");
            var je2c3 = document.getElementById("e2c3");
            var je2c4 = document.getElementById("e2c4");
            var je3c1 = document.getElementById("e3c1");
            var je3c2 = document.getElementById("e3c2");
            var je3c3 = document.getElementById("e3c3");
            var je3c4 = document.getElementById("e3c4");
            var je4c1 = document.getElementById("e4c1");
            var je4c2 = document.getElementById("e4c2");
            var je4c3 = document.getElementById("e4c3");
            var je4c4 = document.getElementById("e4c4");
            var je5c1 = document.getElementById("e5c1");
            var je5c2 = document.getElementById("e5c2");
            var je5c3 = document.getElementById("e5c3");
            var je5c4 = document.getElementById("e5c4");
            var finalpoints = [0,0,0,0,0,0,0];
            var chooseGet = [0,0,0,0,0];
            document.getElementById("submint").finalScore = function(){
                function doubleScore (ipt,ex,pst){
                    var doubleGet = 0;
                    var doubleFinal = 0;
                    var wrong = 0;
                    for(i=0;i<4;i++){
                        if (ipt[i].checked == true){
                            doubleGet += 1;
                            if ((ex[i].innerHTML == pst.CorrectSelection1)||(ex[i].innerHTML == pst.CorrectSelection2)){
                                doubleFinal += 1;
                            }
                            if ((ex[i].innerHTML != pst.CorrectSelection1)&&(ex[i].innerHTML != pst.CorrectSelection2)){
                                wrong += 1;
                            }
                        }
                    }
                    if (wrong != 0){
                        doubleFinal = 0;
                    }
                    if (doubleGet > 2){
                        doubleFinal = 0;
                    }
                    return doubleFinal;
                }
                if(je1c1.checked == true){
                    chooseGet[0]+=1;
                    if (document.getElementById("e1slt1").innerHTML == Ex.Ex1[e1num].CorrectSelection){finalpoints[0]=1;}
                }
                if(je1c2.checked == true){
                    chooseGet[0]+=1;
                    if (document.getElementById("e1slt2").innerHTML == Ex.Ex1[e1num].CorrectSelection){finalpoints[0]=1;}
                }
                if(je1c3.checked == true){
                    chooseGet[0]+=1;
                    if (document.getElementById("e1slt3").innerHTML == Ex.Ex1[e1num].CorrectSelection){finalpoints[0]=1;}
                }
                if(je1c4.checked == true){
                    chooseGet[0]+=1;
                    if (document.getElementById("e1slt4").innerHTML == Ex.Ex1[e1num].CorrectSelection){finalpoints[0]=1;}
                }
                if(chooseGet[0]!=1){
                    finalpoints[0]=0;
                }
                if(je2c1.checked == true){
                    finalpoints[1]=1;
                    if (document.getElementById("e2slt1").innerHTML == Ex.Ex2[e2num].CorrectSelection){chooseGet[1]+=1;}
                }
                if(je2c2.checked == true){
                    finalpoints[1]=1;
                    if (document.getElementById("e2slt2").innerHTML == Ex.Ex2[e2num].CorrectSelection){chooseGet[1]+=1;}
                }
                if(je2c3.checked == true){
                    finalpoints[1]=1;
                    if (document.getElementById("e2slt3").innerHTML == Ex.Ex2[e2num].CorrectSelection){chooseGet[1]+=1;}
                }
                if(je2c4.checked == true){
                    finalpoints[1]=1;
                    if (document.getElementById("e2slt4").innerHTML == Ex.Ex2[e2num].CorrectSelection){chooseGet[1]+=1;}
                }
                if(chooseGet[1]!=1){
                    finalpoints[1]=0;
                }
                if(je3c1.checked == true){
                    chooseGet[2]+=1;
                    if (document.getElementById("e3slt1").innerHTML == Ex.Ex3[e3num].CorrectSelection){finalpoints[2]=1;}
                }
                if(je3c2.checked == true){
                    chooseGet[2]+=1;
                    if (document.getElementById("e3slt2").innerHTML == Ex.Ex3[e3num].CorrectSelection){finalpoints[2]=1;}
                }
                if(je3c3.checked == true){
                    chooseGet[2]+=1;
                    if (document.getElementById("e3slt3").innerHTML == Ex.Ex3[e3num].CorrectSelection){finalpoints[2]=1;}
                }
                if(je3c4.checked == true){
                    chooseGet[2]+=1;
                    if (document.getElementById("e3slt4").innerHTML == Ex.Ex3[e3num].CorrectSelection){finalpoints[2]=1;}
                }
                if(chooseGet[2]!=1){
                    finalpoints[2]=0;
                }
                if(je4c1.checked == true){
                    chooseGet[3]+=1;
                    if (document.getElementById("e4slt1").innerHTML == Ex.Ex4[e4num].CorrectSelection){finalpoints[3]=1;}
                }
                if(je4c2.checked == true){
                    chooseGet[3]+=1;
                    if (document.getElementById("e4slt2").innerHTML == Ex.Ex4[e4num].CorrectSelection){finalpoints[3]=1;}
                }
                if(je4c3.checked == true){
                    chooseGet[3]+=1;
                    if (document.getElementById("e4slt3").innerHTML == Ex.Ex4[e4num].CorrectSelection){finalpoints[3]=1;}
                }
                if(je4c4.checked == true){
                    chooseGet[3]+=1;
                    if (document.getElementById("e4slt4").innerHTML == Ex.Ex4[e4num].CorrectSelection){finalpoints[3]=1;}
                }
                if(chooseGet[3]!=1){
                    finalpoints[3]=0;
                }
                if(je5c1.checked == true){
                    chooseGet[4]+=1;
                    if (document.getElementById("e5slt1").innerHTML == Ex.Ex5[e5num].CorrectSelection){finalpoints[4]=1;}
                }
                if(je5c2.checked == true){
                    chooseGet[4]+=1;
                    if (document.getElementById("e5slt2").innerHTML == Ex.Ex5[e5num].CorrectSelection){finalpoints[4]=1;}
                }
                if(je5c3.checked == true){
                    chooseGet[4]+=1;
                    if (document.getElementById("e5slt3").innerHTML == Ex.Ex5[e5num].CorrectSelection){finalpoints[4]=1;}
                }
                if(je5c4.checked == true){
                    chooseGet[4]+=1;
                    if (document.getElementById("e5slt4").innerHTML == Ex.Ex5[e5num].CorrectSelection){finalpoints[4]=1;}
                }
                if(chooseGet[4]!=1){
                    finalpoints[4]=0;
                }
                finalpoints[5] = doubleScore(document.getElementsByName("dchoose1"),document.getElementsByName("e6slt"),Ex.Ex6[e6num]);
                finalpoints[6] = doubleScore(document.getElementsByName("dchoose2"),document.getElementsByName("e7slt"),Ex.Ex7[e7num]);
                console.log(finalpoints);
                var finalScoreGet = 0;
                var beforePassword = undefined;
                for(i=0;i<7;i++){
                    finalScoreGet += finalpoints[i];
                }
                console.log(finalScoreGet);
                switch (finalScoreGet){
                    case 0:beforePassword = "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9";break;
                    case 1:beforePassword = "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b";break;
                    case 2:beforePassword = "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35";break;
                    case 3:beforePassword = "4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce";break;
                    case 4:beforePassword = "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a";break;
                    case 5:beforePassword = "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb";break;
                    case 6:beforePassword = "e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683";break;
                    case 7:beforePassword = "792a699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451";break;
                    case 8:beforePassword = "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3";break;
                    case 9:beforePassword = "c9581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7";break;
                }
                document.getElementById("pass").innerHTML = beforePassword.substring(0,4);
                pwdsa.style.display="block";
            }
        }
    }
}