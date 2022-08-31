function valueContainer() {
    var obj = {
    }
    var a1 = document.getElementById("animal").value;
    var a2 = document.getElementById("anotheranimal").value;
    var x= document.getElementById("running").value;
    var y = document.getElementById("dog").value;
    var adj = document.getElementById("adj").value;
    var moti = document.getElementById("motivational").value;
    var n = document.getElementById("two").value;
    var n2 = document.getElementById("re").value;
    var n3 = document.getElementById("yn").value;
    var n4 = document.getElementById("text").value;
    obj["v"] = a1
    obj["v1"] = a2
    obj["v2"] = x
    obj["v3"] = y
    obj["v4"] = adj
    obj["v5"] = moti
    obj["v6"] = n
    obj["v7"] = n2
    obj["v8"] = n3
    obj["v9"] = n4
    console.log(obj)
    sessionStorage.setItem("data", JSON.stringify(obj));
    return false;
}
