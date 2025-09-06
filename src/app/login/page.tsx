"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Image from "next/image";
import axios from "axios";

const iranPhoneRegex = /^(?:\+98|0098|0)?9\d{9}$/;

function LoginPage () {
    const [mobileNumber, setMobileNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        if (!iranPhoneRegex.test(mobileNumber)) {
            alert("Mobile number format is not valid. Example: 09xxxxxxxxx");
            return;
        }

        try {
            setLoading(true);
            setErrorMsg("");

            await login(mobileNumber);

            router.push("/dashboard");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setErrorMsg(error.response?.data?.message || error.message);
            } else if (error instanceof Error) {
                setErrorMsg(error.message);
            } else {
                setErrorMsg("Unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row xl:flex-row w-full h-full items-center justify-between bg-white rounded-xl border border-[#A5A5A5]">
            <div className="w-full flex flex-col md:gap-8 md:mb-11 lg:gap-10 xl:w-[55%] xl:gap-12 items-center justify-center mb-10 gap-7">
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
                    className="w-40 text-[13px] md:w-52 lg:w-56 lg:text-[14px] xl:w-80 text-white font-[600]"
                    onClick={handleLogin}
                    disabled={loading}
                />
            </div>
            <div className="w-full xl:w-[45%] relative">
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