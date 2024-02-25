import { useState } from "react";
import RoleButtons from "./RoleButtons";
import { SURVIVOR_PERKS } from "../surv-database.js";
import { KILLER_PERKS } from "../killer-database.js";

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

  // function handleKillerNameChange(event) {
  //   //console.log(event);
  //   setKillerName(event.target.value);
  // }

  // let killer = (
  //   <h2 className="text-center underline uppercase font-mono text-4xl ">
  //     {killerName}
  //   </h2>
  // );

  // if (killerButtonClicked) {
  //   killer = (
  //     <div>
  //       <input
  //         className="border mr-4 text-slate-300"
  //         placeholder="Type Killer Name"
  //         type="text"
  //         required
  //         value={killerName}
  //         onChange={handleKillerNameChange}
  //       ></input>
  //       <button className="border" onClick={() => handleKillerButtonClick()}>
  //         Save
  //       </button>
  //     </div>
  //   );
  // }

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
      {/* <h2 className="text-center underline uppercase font-mono text-4xl ">
        {selectedRole === "survivor" ? selectedRole : killer}
      </h2> */}
      <ul className="grid grid-cols-4 justify-items-center py-20">
        {selectedPerks.map((perk) => (
          <li key={perk.id}>
            <h3>{perk.name}</h3>
            <p>{perk.description}</p>
          </li>
        ))}
      </ul>
      <hr className="mb-10"></hr>
      <div>
        <h3>Used Survivor Perks:</h3>
        <ul>
          {usedSurvivorPerks.map((perk) => (
            <li key={perk.id}>
              <h3>{perk.name}</h3>
            </li>
          ))}
        </ul>

        <h3>Used Killer Perks:</h3>
        <ul>
          {usedKillerPerks.map((perk) => (
            <li key={perk.id}>
              <h3>{perk.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
