import { useState } from "react";
import { SELECTION_TYPE } from "../lib/helpers.js";

export default function UsedKillerPerks({ perks }) {
  const [color, setColor] = useState("text-yellow-400");
  function handleResult(result) {
    result === SELECTION_TYPE.ESCAPED
      ? setColor("text-lime-500")
      : setColor("text-red-700");
  }
  return (
    <div>
      <h2>Used Killer Perks:</h2>
      <ul>
        {perks.map((perk, index) => (
          <li key={index}>
            <p className={color}>{perk.name}</p>
            {index % 4 === 3 && ( // Her 4 perk için bir grup buton oluştur
              <div>
                <button onClick={() => handleResult(SELECTION_TYPE.ESCAPED)}>
                  Win
                </button>
                <button onClick={() => handleResult(SELECTION_TYPE.SACRIFIED)}>
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
