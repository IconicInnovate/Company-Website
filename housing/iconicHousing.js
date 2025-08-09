 script.js
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (!name || !email || !message){
            alert('Please fill in all fields.');
            return;
        }

        //  simulate form submission
        alert(`Thank you, ${name}! Your message has been received.`);  // note this `` for js
        //  optionally reset the form
        form.reset();
    });
})






// document.addEventListener('DOMContentLoaded', () => 
//   {
//   const form = document.querySelector('.contact-form');
//   const hamburger = document.getElementById('hamburger');
//   const navLinks = document.getElementById('navLinks');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = form.querySelector('input[type="text"]').value.trim();
//     const email = form.querySelector('input[type="email"]').value.trim();
//     const message = form.querySelector('textarea').value.trim();

//     if (!name || !email || !message) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     alert(`Thank you, ${name}! Your message has been received.`);
//     form.reset();
//   });

//   // Handle hamburger click
//   hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
//   });
// });
