import Image from "next/image";
import { auth, signIn } from "../auth";
import LoginButton from "./login-button";

export async function SideBarSection() {
  const session = await auth();
  if (!session) return <UnAuthenticatedSideBar />;

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg border p-6 w-full max-w-sm">
      {/* User Image */}
      <Image
        src={session?.user?.image}
        alt={session?.user?.name?.charAt(0).toUpperCase()}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      {/* User Name */}
      <p className="text-xl font-semibold mb-2">{session?.user?.name}</p>
      {/* User Email */}
      <p className="text-gray-500 text-sm mb-4">{session?.user?.email}</p>

      {/* Additional Sidebar Items */}
      <div className="w-full divide-y divide-gray-200">
        <p className="text-center py-2">Recent Activity</p>
        <p className="text-center py-2">Account Settings</p>
        <p className="text-center py-2">Logout</p>
      </div>
    </div>
  );
}

export default SideBarSection;

const UnAuthenticatedSideBar = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg border p-6 w-full max-w-sm">
      <p className="text-xl font-semibold text-center">Welcome back</p>
      <p className="text-muted/foreground text-center">
        Login to access your profile and connect with others
      </p>
      {/* Additional Sidebar Items */}
      <div className="flex flex-col w-full divide-y divide-gray-200 gap-2 mt-4">
        <LoginButton />
      </div>
    </div>
  );
};
