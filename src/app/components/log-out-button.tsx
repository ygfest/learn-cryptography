"use client";

import { userLogout } from "../../../actions/auth.action";

function LogOutButton() {
  return (
    <button
      className="py-1 text-white text-sm bg-secondary hover:bg-black rounded-full w-full"
      onClick={() => userLogout()}
    >
      Log out
    </button>
  );
}

export default LogOutButton;
