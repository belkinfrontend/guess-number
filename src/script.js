let prNum, out;
prNum = Math.floor((Math.random() * 10) + 1);
console.log(prNum + " is the right answer");
//true_number = document.getElementById("true_number");
//true_number.innerHTML = prNum;

let check = () => {

    let num, true_number, img, src;


    num = document.getElementById("mynum").value;
    out = document.getElementById("out");

    img = document.createElement("img");

    img.src = "img/congratulations.gif";
    src = document.getElementById("congratulations");

    

    if (num == "") {
        out.innerHTML = "Enter the number";
    } else if (num == prNum) {
        out.innerHTML = "Congratulations!!!";
        src.appendChild(img);
    } else {
        out.innerHTML = "Try again, loser!";
    }
}