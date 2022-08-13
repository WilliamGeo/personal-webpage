function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age.toString();
}

function william() {
    document.getElementById("willsage").innerHTML = getAge(2001);
    document.getElementById("willsscocials").innerHTML;
}

function joe() {
    document.getElementById("joesage").innerHTML = getAge(2002);
}

function loadProfiles() {
    william();
    joe();
}