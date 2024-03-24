function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "1") {
        document.getElementById("skillsMember1").style.display = "block";
        document.getElementById("skillsMember2").style.display = "none";
        document.getElementById("skillsMember3").style.display = "none";
    } else if (memberValue == "2") {
        document.getElementById("skillsMember1").style.display = "block";
        document.getElementById("skillsMember2").style.display = "block";
        document.getElementById("skillsMember3").style.display = "none";
    } else if (memberValue == "3") {
        document.getElementById("skillsMember1").style.display = "block";
        document.getElementById("skillsMember2").style.display = "block";
        document.getElementById("skillsMember3").style.display = "block";
    } else {
        document.getElementById("skillsMember1").style.display = "none";
        document.getElementById("skillsMember2").style.display = "none";
        document.getElementById("skillsMember3").style.display = "none";
    }
}