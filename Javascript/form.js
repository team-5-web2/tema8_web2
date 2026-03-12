const form = document.querySelector("form");

const navnOutput = document.querySelector("#navn_output");
const mailOutput = document.querySelector("#mail_output");
const tlfOutput = document.querySelector("#tlf_output");
const raceOutput = document.querySelector("#race_output");
const alderOutput = document.querySelector("#alder_output");
const koenOutput = document.querySelector("#koen_output");
const problemOutput = document.querySelector("#problem_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);

  // 2. Vis værdierne i de rigtige output-felter
  navnOutput.textContent = formData.get("navn");
  mailOutput.textContent = formData.get("mail");
  tlfOutput.textContent = formData.get("tlf");
  raceOutput.textContent = formData.get("race");
  alderOutput.textContent = formData.get("alder");
  koenOutput.textContent = formData.get("koen");
  problemOutput.textContent = formData.get("problem");
  termsOutput.textContent = formData.get("terms");

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
