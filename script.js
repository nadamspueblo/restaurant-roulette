function showUser1Screen() {
    // Hide welcome screen
    let welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.classList.remove("active");

    // Show user 1 screen
    let user1Screen = document.getElementById("user1-screen");
    user1Screen.classList.add("active");
}