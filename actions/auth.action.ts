"use server";

import { signIn } from "@/app/auth";

export async function userLogin() {
  await signIn("github");
}
