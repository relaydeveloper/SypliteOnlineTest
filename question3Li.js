

function makeList(value) {
    var list = document.createElement('ul');
    for (var i = 0; i < value; i++) {
        var item = document.createElement('li');
        if (i % 2 === 0) {
            item.appendChild(document.createTextNode('options_' + i));
            list.appendChild(item);
        }
    }
    return list;
}
document.getElementById('ListField').appendChild(makeList(30));

//We need to define div tag in index.html
//<div id="ListField"></div> 