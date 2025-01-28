import Image from "next/image";
import { auth } from "../auth";

export async function SideBarSection() {
  const session = await auth();

  const userImage = session?.user?.image || "https://via.placeholder.com/60";
  const userName = session?.user?.name || "John Doe";
  const userEmail = session?.user?.email || "johndoe@example.com";

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg border p-6 w-full max-w-sm">
      {/* User Image */}
      <Image
        src={userImage}
        alt={userName}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      {/* User Name */}
      <p className="text-xl font-semibold mb-2">{userName}</p>
      {/* User Email */}
      <p className="text-gray-500 text-sm mb-4">{userEmail}</p>

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
