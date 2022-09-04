function Dosomething()
{
    console.log("Dosomething invoke();")
}

class TestClass
{
    constructor(rank, name)
    {
        this.rank = rank;
        this.name = name;
    }

    DoFunc1(someLog) 
    {
        console.log(someLog);
    }
}

const increaseButton = document.getElementById("Increase");
const decreaseButton = document.getElementById("Decrease");

const numberText = document.getElementById("number");

let number = 0;

increaseButton.onclick = () => 
{
    console.log("Click Increase button");
    number++;

    UpdateInnerNumText(number);
}

decreaseButton.onclick = () => 
{
    console.log("Click Decrease button");
    number--;

    UpdateInnerNumText(number);
}

function UpdateInnerNumText(num)
{
    numberText.innerText = num;
}