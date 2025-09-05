"use client";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";

function DashboardPage() {
    return(
        <div className="flex flex-col bg-white">
            <div className="flex p-3 bg-[#8CA6FF] text-white">
                <CiUser />
            </div>
        </div>
    );
}
