export default function Sidebar() {
  const buttonDesign =
    "border rounded border-slate-800 p-1 bg-slate-700 hover:bg-slate-400 hover:text-black focus:ring focus:ring-slate-400";

  return (
    <div className="flex justify-evenly">
      <ul className="grid grid-cols-2">
        <li className="w-96 m-4 py-4 px-2">
          <button className={buttonDesign}>SURVIVOR</button>
        </li>
        <li className="w-96 m-4 py-4 px-40">
          <button className={buttonDesign}>KILLER</button>
        </li>
      </ul>
    </div>
  );
}
