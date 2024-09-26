function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  
  document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const fname = document.getElementById("fname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorElement = document.getElementById("error");

    // Clear previous error messages
    errorElement.textContent = "";

    // Validate the form fields
    if (fname === "") {
      errorElement.textContent = "Please enter your full name.";
      return; // Stop form submission
    }

    if (phone === "" || !/^\d{10,15}$/.test(phone)) {
      errorElement.textContent = "Please enter a valid phone number (10 to 15 digits).";
      return; // Stop form submission
    }

    if (message === "") {
      errorElement.textContent = "Please enter your message.";
      return; // Stop form submission
    }

    // Format the WhatsApp message
    const formattedMessage = `Hello, my name is ${fname}.%0A%0A${message}.%0A%0AMy phone number is ${phone}.`;

    // WhatsApp API URL with your phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=2349063347770&text=${formattedMessage}`;

    // Redirect the user to the WhatsApp URL
    window.open(whatsappUrl, '_blank');
  });