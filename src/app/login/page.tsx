"use client";
import React, { useState } from "react";
import LoginBox from "@/Components/Login/LoginBox";
import Image from "next/image";

function LoginPage () {
    return (
        <div className="flex w-full h-full items-center justify-between bg-white rounded-xl border border-[#A5A5A5]">
            <div className="xl:w-[58%]">
                <LoginBox />
            </div>
            <div className="xl:w-[42%]">
                <Image
                    width={1000}
                    height={1000}
                    src="/Images/login-image.png"
                    className="w-full"
                    alt="login-image"
                    priority
                />
            </div>
        </div>
    );
}

export default LoginPage;