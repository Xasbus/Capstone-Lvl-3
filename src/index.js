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

const root = createRoot(window.bodyTag);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="" element={<Home />} />
      <Route path="/Capstone-Lvl-3" element={<Home />} />
      <Route path="/consoles" element={<Consoles />} />
      <Route path="/games" element={<Games />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
