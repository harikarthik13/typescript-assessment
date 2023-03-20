interface Color {
    color: string;
    code: string;
}

function getColor(): Promise<Color[]> {

    return fetch('/color.json')
        .then(res => res.json())
        .then(res => { return res as Color[] })
}

getColor()
.then(col => {
    console.log(col.map(c => "color:" + c.color + "/n" + "code:" + c.code + "/n").toString())
})