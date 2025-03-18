"use client";

import { signIn } from "../auth";
import { userLogin } from "../../../actions/auth.action";

function LoginButton() {
  return (
    <button
      className=" py-1 w-full rounded-full bg-secondary hover:bg-secondary/20 transition text-white text-sm"
      onClick={() => userLogin()}
    >
      Login
    </button>
  );
}

export default LoginButton;
