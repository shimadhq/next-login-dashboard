import React from "react";
import Image from "next/image";
import Button from "@/Components/UI/Button";

const LoginBox = () => {
    return(
        <div className="flex flex-col items-center justify-center gap-10">
            <Image
                width={1000}
                height={1000}
                src="/Images/logo.png"
                className="w-96"
                alt="logo"
                priority
            />
        </div>
    )
}

export default LoginBox;