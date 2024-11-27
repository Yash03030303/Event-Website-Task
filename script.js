// Show and hide popup
const registerButton = document.getElementById("registerButton");
const popupForm = document.getElementById("popupForm");
const closePopup = document.getElementById("closePopup");

registerButton.addEventListener("click", () => {
  popupForm.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popupForm.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popupForm) {
    popupForm.style.display = "none";
  }
});

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Gather form data
  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    contact: document.getElementById("contact").value.trim(),
    college: document.getElementById("college").value.trim(),
    branch: document.getElementById("branch").value.trim(),
    year: document.getElementById("year").value.trim(),
  };

  // Replace this with your Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbw8N_EOLHOYKjZyCFF01kfIqNvk1BtSu74XE82rEcFM3fjyVJ2lw3MlSTrCp-hmA_EHNg/exec";

  try {
    // Validate form data
    if (!data.name || !data.email || !data.contact || !data.college || !data.branch || !data.year) {
      alert("All fields are required. Please fill out the form completely.");
      return;
    }

    // Send data to Apps Script endpoint
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // Ensure JSON format
      },
    });

    // Parse the response
    const result = await response.json();

    // Handle success or error from server
    if (result.status === "success") {
      alert("Registration Successful!");
      popupForm.style.display = "none"; // Close the popup form
      document.getElementById("registrationForm").reset(); // Reset form
    } else {
      throw new Error(result.message); // Handle server error
    }
  } catch (error) {
    alert("Error: " + error.message); // Display error to the user
  }
});
