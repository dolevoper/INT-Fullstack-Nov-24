const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const userDataForm = document.getElementById('userDataForm') as HTMLFormElement;
const registerForm = document.getElementById('registerForm') as HTMLFormElement;
const editForm = document.getElementById('editForm') as HTMLFormElement;
const userData = document.getElementById('userData') as HTMLSpanElement;
const registerBtn = document.getElementById('registerBtn') as HTMLButtonElement;
const editBtn = document.getElementById('editBtn') as HTMLButtonElement;

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  userData.textContent = username;
  showUserDataForm();
});

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showRegisterForm();
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUsername = (document.getElementById('newUsername') as HTMLInputElement).value;
  const newPassword = (document.getElementById('newPassword') as HTMLInputElement).value;
  loginForm.reset();
  showLoginForm();
});

editBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showEditForm();
});

editForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const editUsername = (<HTMLInputElement>document.getElementById('editUsername')).value;
    const editPassword = (<HTMLInputElement>document.getElementById('editPassword')).value;
    userDataForm.reset();
    showUserDataForm();
})

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