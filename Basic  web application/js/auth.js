// Fake user database using localStorage
const users = JSON.parse(localStorage.getItem('fd_users')) || [];

// Register Form
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const name = document.getElementById('reg-name').value;

  // Check if user exists
  if (users.some(user => user.email === email)) {
    alert('Email already registered!');
    return;
  }

  // Add new user
  users.push({ email, password, name });
  localStorage.setItem('fd_users', JSON.stringify(users));
  
  alert('Registration successful! You can now login.');
  window.location.href = 'login.html';
});

// Login Form
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Find user
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    alert('Login successful! Redirecting...');
    // In a real app, you would redirect to dashboard
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials!');
  }
});