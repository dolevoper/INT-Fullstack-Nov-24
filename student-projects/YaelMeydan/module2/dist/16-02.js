function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Perform login logic here
}
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    // Perform registration logic here
}
function editUserDetails() {
    const newUsername = document.getElementById('editUsername').value;
    const newPassword = document.getElementById('editPassword').value;
    // Perform user details editing logic here
}
function showRegistrationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}
function showEditUserForm() {
    document.getElementById('userDetailsForm').style.display = 'block';
}
