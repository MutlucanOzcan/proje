import { useState } from "react";
import { SELECTION_TYPE } from "../lib/helpers.js";

export default function UsedPerkList({ usedKillerPerks, usedSurvivorPerks }) {
  const [color, setColor] = useState("text-yellow-400");

  function handleClick(result) {
    if (result === SELECTION_TYPE.ESCAPED) {
      setColor("text-lime-500");
    } else if (result === SELECTION_TYPE.SACRIFIED) {
      setColor("text-red-700");
    }
  }

  return (
    <div>
      <h2>Used Survivor Perks:</h2>
      <ul>
        {usedSurvivorPerks.map((perk, index) => (
          <li key={perk.id}>
            <p className={color}>{perk.name}</p>
            {index % 4 === 3 && ( // Her 4 perk için bir grup buton oluştur
              <div>
                <button onClick={() => handleClick(SELECTION_TYPE.ESCAPED)}>
                  Escaped
                </button>
                <button onClick={() => handleClick(SELECTION_TYPE.SACRIFIED)}>
                  Sacrified
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <hr className="m-3"></hr>
      <h2>Used Killer Perks:</h2>
      <ul>
        {usedKillerPerks.map((perk, index) => (
          <li key={perk.id}>
            <p>{perk.name}</p>
            {index % 4 === 3 && ( // Her 4 perk için bir grup buton oluştur
              <div>
                <button onClick={() => handleClick(SELECTION_TYPE.ESCAPED)}>
                  Win
                </button>
                <button onClick={() => handleClick(SELECTION_TYPE.SACRIFIED)}>
                  Lost
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
