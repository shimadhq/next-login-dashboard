"use client";
import React, { useState } from "react";
import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";
import Image from "next/image";

function LoginPage () {
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <div className="flex w-full h-full items-center justify-between bg-white rounded-xl border border-[#A5A5A5]">
            <div className="xl:w-[58%] flex flex-col items-center justify-center gap-12">
                <Image
                    width={1000}
                    height={1000}
                    src="/Images/logo.png"
                    className="w-96 h-48 object-cover"
                    alt="logo"
                    priority
                />
                <div className="w-80">
                    <Input
                        label="Mobile Number"
                        value={mobileNumber}
                        onChange={setMobileNumber}
                    />
                </div>
                <Button
                    text="Login"
                    className="w-80 text-white font-[600]"
                />
            </div>
            <div className="xl:w-[42%] relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/Images/login-image.png"
                    className="w-full xl:relative"
                    alt="login-image"
                    priority
                />
            </div>
        </div>
    );
}

export default LoginPage;