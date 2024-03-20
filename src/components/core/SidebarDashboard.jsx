"use client";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useZustandStores } from "~/zustandStores";

const SidebarDashboard = () => {
  const router = useRouter();
  const { users, createUsers } = useZustandStores();



  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="py-3 text-xl font-light">
          Welcome,
          <span className="px-1 font-bold">{users.username}</span>
        </h1>
      </div>
      <div
        className="flex gap-5 items-center text-md cursor-pointer font-bold hover:px-3 hover:py-3 hover:shadow-lg hover:rounded-md"
        onClick={() => router.push("/dashboard/product")}
      >
        <span className="bg-blue-200 px-2 py-2 rounded-md text-white">
          <IoFastFoodOutline size={28} />
        </span>
        Master Data
      </div>
      <div
        className="flex gap-5 items-center cursor-pointer text-md font-bold hover:px-3 hover:py-3 hover:shadow-lg hover:rounded-md"
        onClick={() => router.push("/dashboard/transaction")}
      >
        <span className="bg-blue-200 px-2 py-2 rounded-md text-white">
          <CiBoxList size={28} />
        </span>
        Transaction
      </div>
      <div
        className="flex gap-5 items-center cursor-pointer text-md font-bold hover:px-3 hover:py-3 hover:shadow-lg hover:rounded-md"
        onClick={() => router.push("/register")}
      >
        <span className="bg-blue-200 px-2 py-2 rounded-md text-white">
          <CiBoxList size={28} />
        </span>
        Create Admin
      </div>
      <div className="flex cursor-pointer gap-5 items-center text-md font-bold">
        <span className="bg-blue-200 px-2 py-2 rounded-md text-white">
          <IoMdLogOut size={28} />
        </span>
        Logout
      </div>
    </div>
  );
};

export default SidebarDashboard;
