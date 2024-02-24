import { useState } from "react";
import Header from "./components/Header.jsx";
import Roles from "./components/Roles.jsx";

export default function App() {


  return (
    <>
      <Header onSelectedRole={asd} />
      <main>
        <Roles />
      </main>
    </>
  );
}
