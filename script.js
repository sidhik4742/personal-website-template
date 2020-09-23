let name;
let email;
let phone;
let message;

document.getElementById("submitBtn").addEventListener("click", (event) => {
  event.preventDefault();
  name = document.getElementById("Name").value;
  email = document.getElementById("Email").value;
  phone = document.getElementById("Phone").value;
  message = document.getElementById("Message").value;

  console.log(
    `name = ${name} email = ${email} phone = ${phone} message = ${message}`
  );
  if (validate()) {
    document.getElementById("formSubmit").submit();
    alert("Thank you for submitting form");
  }
});

const validate = () => {
  let nameStatus = true;
  let emailStatus = true;
  let phoneStatus = true;
  let messageStatus = true;
  console.log("This is validate function");
  if (nameStatus) {
    document.getElementById("Name").style.borderColor = "#ccc";
    nameStatus = false;
  }
  if (emailStatus) {
    document.getElementById("Email").style.borderColor = "#ccc";
    emailStatus = false;
  }
  if (phoneStatus) {
    document.getElementById("Phone").style.borderColor = "#ccc";
    phoneStatus = false;
  }
  if (messageStatus) {
    document.getElementById("Message").style.borderColor = "#ccc";
    messageStatus = false;
  }

  let mailFormat = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let phoneFormat = /^\d{10}$/;
  if (name === "Name" || name.length < 4) {
    document.getElementById("Name").style.borderColor = "red";
    console.error("Enter minimum 4 character");
    return false;
  } else if (!email.match(mailFormat)) {
    document.getElementById("Email").style.borderColor = "red";
    console.error("Enter valid email-id");
    return false;
  } else if (!phone.match(phoneFormat)) {
    document.getElementById("Phone").style.borderColor = "red";
    console.error("Enter valid phone number");
    return false;
  } else if (
    message === "Message content should be at least 10 characters..."
  ) {
    console.error("Enter at minimum 5 character!...");
    document.getElementById("Message").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("Name").style.borderColor = "#ccc";
    document.getElementById("Email").style.borderColor = "#ccc";
    document.getElementById("Phone").style.borderColor = "#ccc";
    document.getElementById("Message").style.borderColor = "#ccc";
    return true;
  }
};
