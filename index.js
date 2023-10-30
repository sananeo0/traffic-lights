let red = document.getElementsByClassName("red")[0];
let yellow = document.getElementsByClassName("yellow")[0];
let green = document.getElementsByClassName("green")[0];


function changeTrafficLightColor() {

    red.style.boxShadow = "0px 0px 50px red"

    setTimeout(() => {
        red.style.boxShadow = "none";

        yellow.style.boxShadow = "0px 0px 50px yellow"

        setTimeout(() => {
            yellow.style.boxShadow = "none";

            green.style.boxShadow = "0px 0px 50px rgb(28, 255, 39)"

            setTimeout(() => {

                green.style.boxShadow = "none";

                changeTrafficLightColor()

            }, 15000)

        }, 2000)

    }, 10000)
}

changeTrafficLightColor();
