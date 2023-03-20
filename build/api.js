"use strict";
function getColor() {
    return fetch('/color.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getColor()
    .then(col => {
    console.log(col.map(c => "color:" + c.color + "/n" + "code:" + c.code + "/n").toString());
});
