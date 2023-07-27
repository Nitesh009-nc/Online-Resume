// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
  
    // Display the entered information
    const resumeContent = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  
    document.getElementById('resume').innerHTML = resumeContent;
  }
  
  // Event listener for form submission
  document.getElementById('resumeForm').addEventListener('submit', handleSubmit);
  