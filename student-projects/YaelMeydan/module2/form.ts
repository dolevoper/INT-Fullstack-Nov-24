function login() {
    const username = (<HTMLInputElement>document.getElementById('loginUsername')).value;
    const password = (<HTMLInputElement>document.getElementById('loginPassword')).value;
    if(username === register && password === true){
      showEditUserForm();
    }

  }
  
  function register() {
    const username = (<HTMLInputElement>document.getElementById('registerUsername')).value;
    const password = (<HTMLInputElement>document.getElementById('registerPassword')).value;
    if(onclick(register)){
       return login();
      }
    }
  
  
  function editUserDetails() {
    const editUsername = (<HTMLInputElement>document.getElementById('editUsername')).value;
    const editPassword = (<HTMLInputElement>document.getElementById('editPassword')).value;
    // Perform user details editing logic here
  }

  function showRegistrationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
  }
  
  function showEditUserForm() {
    document.getElementById('userDetailsForm').style.display = 'block';
  }
  