let pbtm = document.querySelector(".pbtm")
let hitval = document.querySelector("#hitval")
let dig = document.querySelectorAll(".dig")
let scoreval = document.querySelector("#scoreval")

const hitNum = () => {
    hitval.innerHTML = Math.floor(Math.random() * 10)
}

const creatBubble = () => {
    let i
    let bblval
    let clutter = ""
    for (i = 1; i < 500; i++) {
        bblval = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${bblval}</div>`
        pbtm.innerHTML = clutter
    }
}

const score = () => {
    pbtm.addEventListener("click", (dets) => {
        let bln = dets.target.innerHTML
        if (bln === hitval.innerHTML) {
            let scnum = Number(scoreval.innerHTML)
            scnum += 10
            scoreval.innerHTML = scnum
            creatBubble()
        }
    })
}

const timer = () => {
    let timemax = 60
    let timeval = document.querySelector("#timeval")
    setInterval(() => {

        if (timemax >= 0) {
            timeval.innerHTML = timemax--
        } else {
            pbtm.innerHTML = `<h1>GAME OVER <br>
            YOUR SCORE IS = ${scoreval.innerHTML}
            </h1>`
            console.log(scoreval.innerHTML)
        }
    }, 1000);
}

hitNum()
timer()
creatBubble()
score()
