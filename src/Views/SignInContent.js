import React from "react";

export function SignInContent() {
  return (
    <>
      <div className="bold">Would you like to log in?</div>
      <br />
      Email: <input type="email" required /> <br />
      Password: <input type="password" required />
    </>
  );
}
