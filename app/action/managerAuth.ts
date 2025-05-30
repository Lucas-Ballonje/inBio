"use server";
import { auth, signIn, signOut } from "@/app/lib/auth";

export async function managerAuth() {
  const session = await auth();

  if (!session) {
    return await signIn("google", {
      redirectTo: "/criar",
    });
  }

  return await signOut({
    redirectTo: "/",
  });
}
