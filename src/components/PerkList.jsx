import PERKS from "../database.js";

export default function PerkList() {
  const perksData = [...PERKS];
  return (
    <div>
      <h1 className="flex justify-center">Perks</h1>
      <ul className="grid grid-cols-2  ">
        {perksData.map((perk) => (
          <li key={perk.id} className="m-2 p-1 border rounded border-gray-800">
            <h2>{perk.name}</h2>
            <p>{perk.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
