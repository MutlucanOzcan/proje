import { useState } from "react";
import Header from "./components/Header.jsx";
import Roles from "./components/Roles.jsx";
import SurvivorTitle from "./components/SurvivorTitle.jsx";

export default function App() {
  const [role, setRole] = useState("Select a role please.");

  function handleSelectRole(curRole) {
    setRole(curRole);
  }

  return (
    <>
      <Header />
      <main>
        <SurvivorTitle role={role} />
        <Roles onRole={handleSelectRole} />
      </main>
    </>
  );
}
