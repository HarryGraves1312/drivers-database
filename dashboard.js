firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        loadDrivers();
    } else {
        window.location.href = "login.html";
    }
});

function loadDrivers() {
    db.collection("drivers").get().then((querySnapshot) => {
        var table = document.getElementById('drivers-table').getElementsByTagName('tbody')[0];
        table.innerHTML = "";
        querySnapshot.forEach((doc) => {
            var driver = doc.data();
            var row = table.insertRow();
            row.insertCell(0).innerText = driver.first_name + " " + driver.last_name;
            row.insertCell(1).innerText = driver.phone_number;
            row.insertCell(2).innerText = driver.added_by;
        });
    });
}

function searchDriver() {
    var search = document.getElementById('search').value;
    db.collection("drivers").where("first_name", "==", search).get().then((querySnapshot) => {
        var table = document.getElementById('drivers-table').getElementsByTagName('tbody')[0];
        table.innerHTML = "";
        querySnapshot.forEach((doc) => {
            var driver = doc.data();
            var row = table.insertRow();
            row.insertCell(0).innerText = driver.first_name + " " + driver.last_name;
            row.insertCell(1).innerText = driver.phone_number;
            row.insertCell(2).innerText = driver.added_by;
        });
    });
}
