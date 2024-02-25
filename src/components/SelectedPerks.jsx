export default function SelectedPerks({ selectedPerks }) {
  return (
    <ul className="grid grid-cols-4 justify-items-center py-20">
      {selectedPerks.map((perk) => (
        <li key={perk.id}>
          <h3>{perk.name}</h3>
          <p>{perk.description}</p>
        </li>
      ))}
    </ul>
  );
}
