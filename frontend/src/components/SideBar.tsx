import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <aside id="sidebar" className="flex justify-end items-center  w-60">
      <div
        id="sidebar-container"
        className="flex w-60 pt-16px pr-12px pb-32px pl-12px flex-col items-start gap-32px bg-[#212124]"
      >
        <div
          id="sidebar-link"
          className="flex w-52 p-3 justify-between items-center"
        >
          <h1 className="text-white font-bold text-xl">Baatein</h1>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div
          id="sidebar-home"
          className="flex flex-col items-start self-stretch text-white"
        >
          <h3>Home</h3>
          <h3>Explore</h3>
          <h3>Videos</h3>
        </div>
      </div>
      <Outlet />
    </aside>
  );
}

export default SideBar;
