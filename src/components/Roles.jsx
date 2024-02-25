import { useState } from "react";
import RoleButtons from "./RoleButtons";
import { SURVIVOR_PERKS } from "../surv-database.js";
import { KILLER_PERKS } from "../killer-database.js";

export default function Roles({ onRole }) {
  const [selectedRole, setSelectedRole] = useState("Please select a role.");
  const [selectedPerks, setSelectedPerks] = useState([]);
  const [killerButtonClicked, setKillerButtonClicked] = useState(false);
  const [killerName, setKillerName] = useState("");
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
    setKillerButtonClicked((editing) => !editing);
    handleSelect("killer");
    onRole("killer");
    handleSavePerks();
  }
  function handleSurvivorButtonClick() {
    handleSelect("survivor");
    onRole("survivor");
    handleSavePerks();
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
