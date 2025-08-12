// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
    button.style.boxShadow = '';
  });
});

// Subscribe modal
const subscribeBtn = document.querySelector('.btn-subscribe');
subscribeBtn.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Subscribe to Newsletter</h2>
      <input type="email" placeholder="Your email">
      <button class="btn btn-primary">Submit</button>
    </div>
  `;
  document.body.appendChild(modal);
  
  modal.querySelector('.close').addEventListener('click', () => {
    modal.remove();
  });
});