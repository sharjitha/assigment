// Display alert on button click
function showAlert() {
    alert("Hello, welcome to my page!");
}

// Change background color on image hover
const profilePic = document.getElementById("profile-pic");

profilePic.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "#e0f7fa";
});

profilePic.addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "#f0f0f0";
});