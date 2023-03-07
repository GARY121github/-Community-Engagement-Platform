// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values from the form fields
  const name = document.querySelector('#name').value;
  const major = document.querySelector('#major').value;
  const gradYear = document.querySelector('#gradYear').value;
  const careerGoals = document.querySelector('#careerGoals').value;
  const areasOfInterest = document.querySelector('#areasOfInterest').value;
  const skills = document.querySelector('#skills').value;
  const extracurriculars = document.querySelector('#extracurriculars').value;
  const achievements = document.querySelector('#achievements').value;

  // Get the div element for displaying the profile information
  const profileInfo = document.querySelector('.profile-info');

  // Create a new profile info HTML string with the input values
  const profileInfoHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Major:</strong> ${major}</p>
    <p><strong>Graduation Year:</strong> ${gradYear}</p>
    <p><strong>Career Goals:</strong> ${careerGoals}</p>
    <p><strong>Areas of Interest:</strong> ${areasOfInterest}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Extracurricular Activities:</strong> ${extracurriculars}</p>
    <p><strong>Academic Achievements:</strong> ${achievements}</p>
  `;

  // Set the innerHTML of the profile info div to the new profile info HTML string
  profileInfo.innerHTML = profileInfoHTML;

  // Clear the form fields
  form.reset();
});
