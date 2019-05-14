var addName = document.getElementById('input');

function addData() {
    var addItem = document.createElement("li");
    var itemText = document.createElement("span");

    itemText.setAttribute("class", "itemtext");
    addItem.setAttribute('class', 'item');

    var wrap = document.querySelector(".my-list");
    var itemlist = document.querySelector(".item");

    wrap.append(addItem);
    var addDat = addName.value;
    addItem.append(itemText);
    itemText.append(addDat);

    if (addDat === "") {
        var changeText = document.getElementById("input");
        changeText.setAttribute("class", "wrap_input bla");
        changeText.setAttribute("placeholder", "MUST FILL");
        addItem.style.display = "none";


    } else {
        var changeText = document.getElementById("input");
        changeText.setAttribute("class", "wrap_input");
        changeText.setAttribute("placeholder", "Type Here");
    }
    
}

//clear input after filing
function clearInput(){
    document.getElementById("input").value="";
    
}
//header day and date

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var nrOfDay =weekday [d.getDay()];
document.getElementById("day").innerHTML= nrOfDay;

var months = ['January','February','March','April','May','June',
'July','August','September','October','November','December'];
var thisMonth = new Date();
var curentMonth = months[thisMonth.getMonth()];
document.getElementById("month").innerHTML=curentMonth;

// nr of tasks


