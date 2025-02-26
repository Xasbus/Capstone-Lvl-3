import { authenticationAWS } from "../modules/loginAuthentication/authenticationAWS";

export async function handleSignIn(
  event = new Event()
  // onSignIn
) {
  event.preventDefault();
  const inputs = event.target;
  const emailInput = inputs[1];
  const passwordInput = inputs[2];

  const email = emailInput.value;
  const password = passwordInput.value;

  const isAuthenticated = await authenticationAWS(email, password);
  if (isAuthenticated) {
    const closeButton = document.getElementById("cancelButton");
    closeButton.click();
    inputs.reset();
    // onSignIn();
  } else return "The email and password is incorrect.";
  //Instead of setting the errorMessage. It can just return it.
  // Setting the errorMessage from handleSubmit.
}
