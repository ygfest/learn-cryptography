"use server";

import { signIn, signOut } from "@/app/auth";

export async function userLogin() {
  await signIn("github");
}

export async function userLogout() {
  await signOut();
}
