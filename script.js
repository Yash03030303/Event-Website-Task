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
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    college: document.getElementById("college").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value,
  };

  const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL"; // Replace with your Web App URL

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Registration Successful!");
      popupForm.style.display = "none";
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
document.getElementById("registrationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    college: document.getElementById("college").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value,
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbzsuHf7vfdJdYH_-FmmGwDRrVkUifktvwdvJBKeDRok0wbNV1JrDXrlW_rwAQCzQkKqSQ/exec"; 

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Registration Successful!");
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
