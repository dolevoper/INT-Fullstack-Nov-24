
interface User {
    username: string,
    password: string,
    age: number,
  }
  
  let currentUser: User | null = null;
  
  function login(username: string, password: string): boolean {
    // Check if user exists in database
    // Simulating user login for demonstration purposes
    if (username === "testuser" && password === "testpassword") {
      return showU;
    } else {
      return false;
    }
  }
  
  function register(username: string, password: string, age: number): void {
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
  
  function editDetails(username: string, password: string, age: number): void {
    // Update user details in database
    // Simulating user details editing for demonstration purposes
    currentUser = {
      username,
      password,
      age,
    };
  }

