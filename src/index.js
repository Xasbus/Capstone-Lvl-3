import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Consoles } from "./Views/Consoles";
import { Games } from "./Views/Games";
import { Accessories } from "./Views/Accessories";
import { SignIn } from "./Views/SignIn";
import { About } from "./Views/About";
import { Contact } from "./Views/Contact";

const domain = window.location.hostname;
let rootPath = "";
if (domain === "xasbus.github.io") rootPath = "/Capstone-Lvl-3";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />} />
      <Route path={`${rootPath}/home`} element={<Home />} />
      <Route path={`${rootPath}/index.html`} element={<Home />} />
      <Route path={`${rootPath}/404.html`} element={<Home />} />
      <Route path={`${rootPath}/consoles`} element={<Consoles />} />
      <Route path={`${rootPath}/games`} element={<Games />} />
      <Route path={`${rootPath}/accessories`} element={<Accessories />} />
      <Route path={`${rootPath}/signin`} element={<SignIn />} />
      <Route path={`${rootPath}/about`} element={<About />} />
      <Route path={`${rootPath}/contact`} element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
