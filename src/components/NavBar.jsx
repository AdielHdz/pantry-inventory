function NavBar() {
  return (
    <nav className="h-[70px]  flex items-center justify-between px-5">
      <div className="w-[45px] h-[45px] bg-red-50 rounded-full"></div>
      <h2 className=" font-medium text-green-800 text-lg">Inventario</h2>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_56_279)">
          <path
            d="M10 20H30"
            stroke="#0036C1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 25.8333H30"
            stroke="#0036C1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14.1667H30"
            stroke="#0036C1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_56_279">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </nav>
  );
}

export default NavBar;
