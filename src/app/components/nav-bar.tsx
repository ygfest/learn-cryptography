import Link from "next/link";
import { auth, signIn, signOut } from "../auth";

async function NavigationBar() {
  const session = await auth();

  // Server action for handling sign-in
  async function handleSignIn() {
    "use server";
    await signIn("github");
  }

  // Server action for handling sign-out
  async function handleSignOut() {
    "use server";
    await signOut();
  }

  return (
    <nav className="fixed left-1/2 top-4 z-40 w-[90%] max-w-[1200px] -translate-x-1/2 rounded-3xl border-2 border-[#300651] px-4 py-3 backdrop-blur-sm backdrop-saturate-150 bg-[#000000] md:px-8 md:py-4">
      <header className="flex w-full items-center justify-between">
        <img src="/st-logo.png" alt="logo" width={120} height={35} />
        <div className="flex gap-1 md:gap-4 items-center">
          {session && session.user ? (
            <>
              <Link
                href="/startup"
                className="font-medium min-w-[60px] text-sm md:min-w-[100px] md:text-base p-2 rounded-lg text-primary hover:bg-zinc-200 flex-nowrap"
              >
                Get Started
              </Link>
              <Link href={`/user/${session?.id}`}>
                {session?.user?.name}
              </Link>
              <form action={handleSignOut} method="post">
                <button
                  type="submit"
                  className="font-medium min-w-[60px] text-sm md:min-w-[100px] md:text-base p-2 rounded-lg text-primary hover:bg-zinc-200 flex-nowrap"
                >
                  Log out
                </button>
              </form>
            </>
          ) : (
            <form action={handleSignIn} method="post">
              <button
                type="submit"
                className="hidden md:inline p-2 text-sm md:text-base font-medium text-white bg-secondary hover:bg-zinc-600 rounded-lg min-w-[150px] md:min-w-[120px] flex-nowrap"
              >
                Log in
              </button>
            </form>
          )}
        </div>
      </header>
    </nav>
  );
}

export default NavigationBar;
