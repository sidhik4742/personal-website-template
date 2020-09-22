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
    document.getElementById("Name").style.borderColor = "#ccc";
    document.getElementById("Email").style.borderColor = "#ccc";
    document.getElementById("Phone").style.borderColor = "#ccc";
    alert("Thank you for submitting form")
    document.getElementById("formSubmit").submit();
  }
});

const validate = () => {
  console.log("This is validate function");
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
  } else {
    return true;
  }
};
