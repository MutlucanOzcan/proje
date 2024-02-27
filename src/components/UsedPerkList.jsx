import React from "react";

import UsedKillerPerks from "./UsedKillerPerks.jsx";
import UsedSurvivorPerks from "./UsedSurvivorPerks.jsx";

export default function UsedPerkList({ killerPerks, survivorPerks, restart }) {
  return (
    <div>
      <button onClick={restart}>Reset Used Perks</button>
      <UsedSurvivorPerks perks={survivorPerks} />
      <hr className="m-3"></hr>
      <UsedKillerPerks perks={killerPerks} />
    </div>
  );
}
