import { authenticationSim } from "../modules/loginAuthentication/authenticationSim";

export function handleSignIn(event = new Event(), setErrorMessage) {
  event.preventDefault();
  const inputs = event.target;
  const emailInput = inputs[1];
  const passwordInput = inputs[2];

  const email = emailInput.value;
  const password = passwordInput.value;

  const isAuthenticated = authenticationSim(email, password);
  if (isAuthenticated) {
    const closeButton = document.getElementById("cancelButton");
    closeButton.click();
    inputs.reset();
  } else setErrorMessage("The email and password is incorrect.");
}
