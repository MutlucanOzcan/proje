const buttonDesign =
  "border rounded border-slate-800 p-1 bg-slate-700 hover:bg-slate-400 hover:text-black focus:ring focus:ring-slate-400";

export default function RoleButtons({ children, onSelect }) {
  

  return (
    <li className="w-96 m-4 py-4 px-2">
      <button className={buttonDesign} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}