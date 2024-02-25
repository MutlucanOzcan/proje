import { useState } from "react";
import RoleButtons from "./RoleButtons";
import { SURVIVOR_PERKS } from "../surv-database.js";
import { KILLER_PERKS } from "../killer-database.js";
import UsedPerkList from "./UsedPerkList.jsx";
import SelectedPerks from "./SelectedPerks.jsx";

export default function Roles({ onRole }) {
  const [selectedRole, setSelectedRole] = useState("Please select a role.");
  const [selectedPerks, setSelectedPerks] = useState([]);
  const [usedSurvivorPerks, setUsedSurvivorPerks] = useState([]);
  const [usedKillerPerks, setUsedKillerPerks] = useState([]);

  function generateRandomPerks(role) {
    const perks = role === "survivor" ? SURVIVOR_PERKS : KILLER_PERKS;
    const shuffledPerks = perks.sort(() => 0.5 - Math.random());
    const randomPerks = shuffledPerks.slice(0, 4);

    return randomPerks;
  }

  function handleSelect(role) {
    setSelectedRole(role);
    const randomPerks = generateRandomPerks(role);
    setSelectedPerks(randomPerks);

    if (role === "survivor") {
      setUsedSurvivorPerks((prev) => [...prev, ...randomPerks]);
    } else if (role === "killer") {
      setUsedKillerPerks((prev) => [...prev, ...randomPerks]);
    }
  }

  function handleKillerButtonClick() {
    handleSelect("killer");
    onRole("killer");
  }
  function handleSurvivorButtonClick() {
    handleSelect("survivor");
    onRole("survivor");
  }

  return (
    <div>
      <ul className="grid grid-cols-2 justify-items-center">
        <RoleButtons onClick={() => handleSurvivorButtonClick()}>
          Survivor
        </RoleButtons>
        <RoleButtons onClick={() => handleKillerButtonClick()}>
          Killer
        </RoleButtons>
      </ul>
      <SelectedPerks selectedPerks={selectedPerks} />
      <hr className="mb-10"></hr>
      <UsedPerkList
        usedKillerPerks={usedKillerPerks}
        usedSurvivorPerks={usedSurvivorPerks}
      />
    </div>
  );
}
