export default function RoleButtons({ children, onClick }) {
  return (
    <li className="w-32 m-4 py-4 px-2">
      <button
        className="border text-white rounded border-slate-900 p-1 bg-slate-700 hover:bg-slate-400 hover:text-black focus:ring focus:ring-slate-400"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
