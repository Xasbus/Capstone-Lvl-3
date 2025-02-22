import React, { useEffect } from "react";

import selfPic from "../../assets/contactphoto.jpg";
import { handlePhone } from "../controllers/contactHtml/handlePhone";
import { handleEmail } from "../controllers/contactHtml/handleEmail";
import { handleDate } from "../controllers/contactHtml/handleDate";

export function Contact() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <main>
        <section>
          <div>
            <div className="row">
              <div className="col">
                <img alt="self pic" height="100%" width="125px" src={selfPic} />
              </div>
              <div className="col">
                <h1>Contact Us</h1>
                <i className="bi bi-envelope-at-fill"></i>{" "}
                BlahNonsense283@something.com
                <br />
                📞 985 - 555 - 5555
                <br />
                <i className="bi bi-facebook"></i>
                @NotRealDavidFB
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>Contact Customer Service</h3>
          <form onSubmit={handleEmail}>
            Email: <br />
            <input
              id="emailSize"
              required
              name="myEmail"
              type="email"
              placeholder="Enter Your Email"
            />
            <p>
              Summary of Issue:
              <br />
              <input id="emailSize" type="text" placeholder="Text Here" />
            </p>
            <p>
              <input type="submit" />
            </p>
          </form>
        </section>
        <section>
          <h3>Submit an appointment by phone</h3>
          <form onSubmit={handlePhone}>
            Schedule a phone appointment:
            <br />
            <p>
              <input
                type="tel"
                placeholder="XXX-XXX-XXXX"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phoneInput"
              />
            </p>
            <input type="submit" />
          </form>
          <br />
          <form onSubmit={handleDate}>
            Select date and time:
            <br />
            <p>
              <input type="datetime-local" />
            </p>
            <input type="submit" />
          </form>
        </section>
        <output id="outputTag"></output>
      </main>
      <footer>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );
  function componentDidMount() {
    document.title = "Playstation - Contact Page";
    console.log("Title mounted");
  }
  function componentDidUpdate() {
    setTimeout(console.log("Nothing to update."), 2000);
  }
  function componentDidUnmount() {
    console.log("Nothing to unmount");
  }
}
