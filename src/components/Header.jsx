import LOGO from "../Public/dbd-logo.png";

export default function Header() {
  return (
    <header class="flex h-20">
      <img src={LOGO} alt="dead by daylight logo" class="h-16 w-16 m-2" />
      <h2 class="text-lg font-bold flex-grow text-center text-red-700">
        DEAD BY DAYLIGHT PERK RANDOMISER
      </h2>
    </header>
  );
}
