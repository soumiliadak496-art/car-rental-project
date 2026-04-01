function showMessage() {
    alert("Explore our available cars below!");
}

function bookCar(carName) {
    alert("You selected " + carName);
}

function validateForm() {
    let name = document.getElementById("name").value;
    let car = document.getElementById("car").value;

    if (name === "" || car === "") {
        alert("Please fill all fields!");
        return false;
    }

    alert("Booking Successful!");
    return true;
}
