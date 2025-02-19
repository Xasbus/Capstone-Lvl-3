import React from "react";

export function SignInModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary modalColor"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Log In
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modalColor">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Log into your account?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
