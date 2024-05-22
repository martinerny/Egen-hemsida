// Function to update date and time
function updateDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    var dateTimeString = "Current Date: " + date + "<br>Current Time: " + time;
    document.getElementById("datetime").innerHTML = dateTimeString;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();