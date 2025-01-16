import React from "react";
import { NavBar } from "./NavBar";

export function Consoles() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <img
          title="PS5"
          alt="consoles"
          width="100%"
          height="100px"
          src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/8ea6b726-4ea9-405a-98a6-3bef3603b87d.image.png?v=1722103725076"
        />
        <h1>PlayStation Consoles</h1>
        <a id="playstation5"></a>
      </main>
      <footer>
        <table width="100%">
          <tr>
            <td>
              <a href="#playstation5">PlayStation 5</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#playstation4">PlayStation 4</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#playstationvr">PlayStation VR2</a>
            </td>
          </tr>
        </table>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );
}
