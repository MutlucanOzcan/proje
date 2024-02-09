const buttonDesign =
  "border text-white rounded border-slate-900 p-1 bg-slate-700 hover:bg-slate-400 hover:text-black focus:ring focus:ring-slate-400";

export default function RoleButtons({ children, ...props }) {
  return (
    <li className="w-96 m-4 py-4 px-2">
      <button className={buttonDesign} {...props}>
        {children}
      </button>
    </li>
  );
}
