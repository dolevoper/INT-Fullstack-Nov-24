const loginForm = document.getElementById('loginForm');
const userDataForm = document.getElementById('userDataForm');
const registerForm = document.getElementById('registerForm');
const editForm = document.getElementById('editForm');
const userData = document.getElementById('userData');
const registerBtn = document.getElementById('registerBtn');
const editBtn = document.getElementById('editBtn');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    userData.textContent = username;
    showUserDataForm();
});
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showRegisterForm();
});
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    loginForm.reset();
    showLoginForm();
});
editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showEditForm();
});
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editUsername = document.getElementById('editUsername').value;
    const editPassword = document.getElementById('editPassword').value;
    userDataForm.reset();
    showUserDataForm();
});
function showUserDataForm() {
    loginForm.classList.add('hidden');
    userDataForm.classList.remove('hidden');
}
function showRegisterForm() {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
}
function showLoginForm() {
    userDataForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}
function showEditForm() {
    userDataForm.classList.add('hidden');
    editForm.classList.remove('hidden');
}
