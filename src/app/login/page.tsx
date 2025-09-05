"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";
import Image from "next/image";
import axios from "axios";

const iranPhoneRegex = /^(?:\+98|0098|0)?9\d{9}$/;

function LoginPage () {
    const [mobileNumber, setMobileNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        if (!iranPhoneRegex.test(mobileNumber)) {
            alert("Mobile number format is not valid. Example: 09xxxxxxxxx");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get("https://randomuser.me/api/?results=1&nat=us");
            const userData = response.data;

            // Saving data in localStorage
            localStorage.setItem("userData", JSON.stringify(userData));

            // Redirect to dashboard page
            router.push("/dashboard");
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row xl:flex-row w-full h-full items-center justify-between bg-white rounded-xl border border-[#A5A5A5]">
            <div className="xl:w-[55%] w-full flex flex-col items-center justify-center mb-10 gap-7 md:gap-8 md:mb-11 lg:gap-10 xl:gap-12">
                <Image
                    width={1000}
                    height={1000}
                    src="/Images/logo.png"
                    className="w-44 h-20 md:w-60 md:h-24 md:-mt-7 lg:w-64 lg:h-28 xl:w-96 xl:h-48 object-cover"
                    alt="logo"
                    priority
                />
                <div className="w-40 md:w-52 lg:w-56 xl:w-80">
                    <Input
                        label="Mobile Number"
                        value={mobileNumber}
                        onChange={setMobileNumber}
                    />
                </div>
                <Button
                    text={loading ? "Loading..." : "Login"}
                    className="w-40 md:w-52 lg:w-56 xl:w-80 text-[13px] lg:text-[14px] text-white font-[600]"
                    onClick={handleLogin}
                    disabled={loading}
                />
            </div>
            <div className="xl:w-[45%] w-full relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/Images/login-image.png"
                    className="hidden lg:flex w-full relative"
                    alt="login-image"
                    priority
                />
                <Image
                    width={1000}
                    height={1000}
                    src="/Images/login-mobile.png"
                    className="block lg:hidden w-full md:w-[90%] relative"
                    alt="login-mobile"
                    priority
                />
            </div>
        </div>
    );
}

export default LoginPage;