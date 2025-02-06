import React, { useEffect } from "react";
import { NavBar } from "./NavBar";
import { handleEmail } from "../controllers/contactHtml/email";
import { handleDate } from "../controllers/contactHtml/date";
import { handlePhone } from "../controllers/contactHtml/phone";
import selfPic from "../../assets/contactphoto.jpg";

export function Contact() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, []);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <div>
            <div className="row">
              <div className="col">
                <img alt="self pic" height="100%" width="125px" src={selfPic} />
              </div>
              <div className="col">
                <h1>Contact Us</h1>
                ✉️ BlahNonsense283@something.com
                <br />
                📞 985 - 555 - 5555
                <br />
                <img
                  alt="facebook icon"
                  width="4%"
                  src="https://th.bing.com/th?id=OIP.lgict_2VY-2-x2b_kDd_vwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                />
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
    console.log("Contact Phase component mounted");
  }
  function componentDidUpdate() {
    console.log("Contact component did updated.");
  }
  function componentDidUnmount() {
    console.log("Contact page component unmounted.");
  }
}
