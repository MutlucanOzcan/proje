import { useState } from "react";
import Header from "./components/Header.jsx";
import Roles from "./components/Roles.jsx";
import SurvivorTitle from "./SurvivorTitle.jsx";

export default function App() {
  const [role, setRole] = useState();

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
