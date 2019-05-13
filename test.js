var addName = document.getElementById('input');


function addData() {
    var addItem = document.createElement("li");
    var itemText = document.createElement("span");

    itemText.setAttribute("class","itemtext");
    addItem.setAttribute('class', 'item');

    var wrap = document.querySelector(".my-list");
    var itemlist = document.querySelector(".item");

    wrap.append(addItem);
    var addDat = addName.value;
    addItem.append(itemText);
    itemText.append(addDat);
}

