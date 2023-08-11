let input = document.getElementById("text");
let button = document.getElementById("btn");




// button.addEventListener("click", func())

function func() {
    console.log("inside exec only");
    setTimeout(() => {
        let reverseString = input.value.split("").reverse().join("");
        console.log(reverseString);
        document.getElementById('result').innerText = reverseString;
        document.getElementById('result').style.fontSize = "20px";

    }, 2000);
}