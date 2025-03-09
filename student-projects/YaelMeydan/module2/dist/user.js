let currentUser = null;
function login(username, password) {
    // Check if user exists in database
    // Simulating user login for demonstration purposes
    if (username === "testuser" && password === "testpassword") {
        return showU;
    }
    else {
        return false;
    }
}
function register(username, password, age) {
    // Save new user to database
    // Simulating user registration for demonstration purposes
    currentUser = {
        username,
        password,
        age,
        height,
        weight
    };
}
function editDetails(username, password, age) {
    // Update user details in database
    // Simulating user details editing for demonstration purposes
    currentUser = {
        username,
        password,
        age,
    };
}
