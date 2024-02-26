export default function UsedPerkList({ usedKillerPerks, usedSurvivorPerks }) {
  return (
    <div>
      <h3>Used Survivor Perks:</h3>
      <ul>
        {usedSurvivorPerks.map((perk) => (
          <li key={perk.id}>
            <h3>{perk.name}</h3>
          </li>
        ))}
      </ul>
      <hr className="m-3"></hr>
      <h3>Used Killer Perks:</h3>
      <ul>
        {usedKillerPerks.map((perk) => (
          <li key={perk.id}>
            <h3>{perk.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
