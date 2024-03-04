let fullName;
document.getElementById("myButton").onclick = function () {
    fullName = document.getElementById("myName").value;
    console.log(fullName)
    document.getElementById("myHeading").textContent = "hello hi " + fullName;

}