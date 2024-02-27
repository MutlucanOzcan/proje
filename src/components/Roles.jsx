import { useState } from "react";
import RoleButtons from "./RoleButtons";
import { SURVIVOR_PERKS } from "../surv-database.js";
import { KILLER_PERKS } from "../killer-database.js";
import UsedPerkList from "./UsedPerkList.jsx";
import SelectedPerks from "./SelectedPerks.jsx";
import { SELECTION_TYPE } from "../lib/helpers.js";

export default function Roles({ onRole }) {
  const [selectedPerks, setSelectedPerks] = useState([]);
  const [survivorPerks, setSurvivorPerks] = useState([]);
  const [killerPerks, setKillerPerks] = useState([]);

  function handleRestart() {
    setKillerPerks([]);
    setSurvivorPerks([]);
  }

  function generateRandomPerks(role) {
    const perks =
      role === SELECTION_TYPE.SURVIVOR ? SURVIVOR_PERKS : KILLER_PERKS;
    const shuffledPerks = perks.sort(() => 0.5 - Math.random());
    const randomPerks = shuffledPerks.slice(0, 4);

    return randomPerks;
  }

  function handleSelect(role) {
    console.log(role);
    const randomPerks = generateRandomPerks(role);
    setSelectedPerks(randomPerks);

    if (role === SELECTION_TYPE.SURVIVOR) {
      setSurvivorPerks((prev) => [...prev, ...randomPerks]);
    } else if (role === SELECTION_TYPE.KILLER) {
      setKillerPerks((prev) => [...prev, ...randomPerks]);
    }
    onRole(role);
  }

  return (
    <div>
      <ul className="grid grid-cols-2 justify-items-center">
        <RoleButtons onClick={() => handleSelect(SELECTION_TYPE.SURVIVOR)}>
          Survivor
        </RoleButtons>
        <RoleButtons onClick={() => handleSelect(SELECTION_TYPE.KILLER)}>
          Killer
        </RoleButtons>
      </ul>
      <SelectedPerks pickedPerks={selectedPerks} />
      <hr className="m-3"></hr>
      <UsedPerkList
        killerPerks={killerPerks}
        survivorPerks={survivorPerks}
        restart={handleRestart}
      />
    </div>
  );
}
