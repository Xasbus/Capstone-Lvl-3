import React from "react";
import { NavBar } from "./NavBar";

export function Contact() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <table>
            <tr>
              <td>
                <img
                  alt="self pic"
                  height="100%"
                  width="125px"
                  src="assets\contactphoto.jpg"
                />
              </td>
              <td>
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
              </td>
            </tr>
          </table>
        </section>
      </main>
      <footer>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );
}
