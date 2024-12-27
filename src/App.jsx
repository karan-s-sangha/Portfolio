import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <Analytics /> {/* This will add the analytics script */}
      <Header />
    </>
  );
};

export default App;
