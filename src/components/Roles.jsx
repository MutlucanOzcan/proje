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

  function handleSelect(selectedButton) {
    setSelectedRole(selectedButton);
    const perks =
      selectedButton === "survivor"
        ? [setUsedSurvivorPerks[0], ...SURVIVOR_PERKS]
        : [setUsedKillerPerks[0], ...KILLER_PERKS];
    const shuffledPerks = perks.sort(() => 0.5 - Math.random());
    const selectedPerks = shuffledPerks.slice(0, 4);
    setSelectedPerks(selectedPerks);
  }
  function handleSavePerks() {
    if (selectedRole === "survivor") {
      usedSurvivorPerks.push(...selectedPerks);
    } else if (selectedRole === "killer") {
      usedKillerPerks.push(...selectedPerks);
    }
  }

  function handleKillerButtonClick() {
    handleSelect("killer");
    onRole("killer");
    handleSavePerks();
  }
  function handleSurvivorButtonClick() {
    handleSelect("survivor");
    onRole("survivor");
    handleSavePerks();
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
