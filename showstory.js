var data = JSON.parse(sessionStorage.getItem("data"))
console.log(data);
document.getElementById("dog").innerHTML=data["v3"];
        document.getElementById("yno").innerHTML=data["v8"];
        document.getElementById("moral").innerHTML=data["v9"];
        document.getElementById("hrs").innerHTML=data["v6"];
        document.getElementById("quick").innerHTML=data["v7"];
        document.getElementById("ex").innerHTML=data["v5"];
        document.getElementById("alarm").innerHTML=data["v4"];
        var x=document.getElementsByClassName("aniname");
        var y=document.getElementsByClassName("aniname2");
        var z=document.getElementsByClassName("run");
        for(var i=0;i<x.length;i++)
        {
        x[i].innerHTML=data["v"];
            }
        for(var j=0;j<y.length;j++)
            {
        y[j].innerHTML=data["v1"];
                }
        
                for(var k=0;k<z.length;k++)
            {
        z[k].innerHTML=data["v2"];
                }