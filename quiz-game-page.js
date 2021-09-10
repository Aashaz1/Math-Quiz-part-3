function send(){
    number1 = document.getElementById("number01").value;
    number2 = document.getElementById("number02").value;
    actualAnswer= parseInt(number1) * parseInt(number2);
    console.log(actualAnswer);

    questionNumber= "<h4>"+ number1+ " X "+ number2 +"</h4>";
    inputBox= "<br> Answer: <input type='text' id='inputCheckBox'>";
    checkButton= "<br><br><button class='btn btn-info' onclick=check()>Check</button>";
    row= questionNumber+ inputBox+ checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
}