import React from "react";

export function SignOutModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary modalColor"
        data-bs-toggle="modal"
        data-bs-target="#signOutModal"
      >
        Log Out
      </button>

      <div
        className="modal fade"
        id="signOutModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="signOutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modalColor">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signOutModal">
                Log Out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you leave us?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Stay Online
              </button>
              <button type="button" className="btn btn-primary">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
