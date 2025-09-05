"use client";
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const [userData, setUserData] = useState<{ name: string; avatar: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const parsed = JSON.parse(data);
      const user = parsed.results?.[0];
      if (user) {
        setUserData({
          name: `${user.name.first} ${user.name.last}`,
          avatar: user.picture.thumbnail,
        });
      }
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-[#8CA6FF] text-white shadow-md">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {userData?.avatar ? (
            <img
              src={userData.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ) : (
            <CiUser size={40} />
          )}
          <span className="font-semibold text-[14px] lg:text-[15px] xl:text-lg">{userData?.name || "User"}</span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-white text-[#8CA6FF] px-3 py-1 rounded-lg font-medium hover:bg-gray-100 cursor-pointer transition"
        >
          <FiLogOut size={20} />
          <span className="text-[13px] lg:text-[14px]">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg p-10 w-full md:h-[620px] xl:h-[800px] text-center">
          <h1 className="text-[15px] md:text-[16px] lg:text-xl xl:text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
          <p className="text-[13px] md:text-[15px] xl:text-lg text-gray-600">
            Hello {userData?.name || "User"}, glad to see you here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;