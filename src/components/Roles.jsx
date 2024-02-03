import { useState } from "react";
import RoleButtons from "./RoleButtons";
import { SURVIVOR_PERKS } from "../surv-database.js";
import { KILLER_PERKS } from "../killer-database.js";

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState("Please select a role.");
  const [selectedPerks, setSelectedPerks] = useState([]);

  function handleSelect(selectedButton) {
    setSelectedRole(selectedButton);
    const perks = selectedButton === "survivor" ? SURVIVOR_PERKS : KILLER_PERKS;
    const shuffledPerks = perks.sort(() => 0.5 - Math.random());
    const selectedPerks = shuffledPerks.slice(0, 4);
    setSelectedPerks(selectedPerks);
  }

  return (
    <div>
      <ul className="grid grid-cols-2 justify-items-center">
        <RoleButtons onSelect={() => handleSelect("survivor")}>
          Survivor
        </RoleButtons>
        <RoleButtons onSelect={() => handleSelect("killer")}>
          Killer
        </RoleButtons>
      </ul>
      <h2 className="text-center underline uppercase font-mono text-4xl ">
        {selectedRole}
      </h2>
      <ul className="grid grid-cols-4 justify-items-center py-20">
        {selectedPerks.map((perk) => (
          <li key={perk.id}>
            <h3>{perk.name}</h3>
            <p>{perk.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
