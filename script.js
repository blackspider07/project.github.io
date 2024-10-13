// Login Form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Incorrect login credentials.";
    }
});

// Feedback Form
document.getElementById("feedbackForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("feedback-message").textContent = "Thank you for your feedback!";
});

// Search Hotel
function searchHotel() {
    var input = document.getElementById("search").value.toLowerCase();
    var hotels = document.getElementsByClassName("hotel");

    for (var i = 0; i < hotels.length; i++) {
        var hotelName = hotels[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
        if (hotelName.includes(input)) {
            hotels[i].style.display = "";
        } else {
            hotels[i].style.display = "none";
        }
    }
}

// Add Hotel to Dashboard
document.getElementById("addHotelForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    var hotelName = document.getElementById("hotelName").value;
    var hotelLocation = document.getElementById("hotelLocation").value;
    var hotelList = document.getElementById("hotelList");

    var newHotel = document.createElement("li");
    newHotel.textContent = hotelName + " - " + hotelLocation;
    hotelList.appendChild(newHotel);

    document.getElementById("add-hotel-message").textContent = "Hotel added successfully!";
});
