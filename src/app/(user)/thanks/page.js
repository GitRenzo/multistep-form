"use client"
import useFormTool from "@/hooks/useFormTool"
import Image from "next/image"
import { useEffect } from "react"
function Thanks() {
    const {handleStep, resetValues} = useFormTool()
    useEffect(() => {
        setTimeout(() => {
            resetValues()
            handleStep("/")
        }, 3000);
    }, )
    
    return (
        <div className="flex flex-col justify-center items-center h-1/2 w-full m-10">
            <Image src={"/assets/images/icon-thank-you.svg"} alt="Thanks image" height={70} width={70} />
            <h1 className="m-5">Thank you!</h1>
            <p className="max-w-sm text-center text-cool_gray">
                Thanks for confirming your subscription! We hope you have
                fun using our platform. If you ever need support, please feel
                free to email us at support@testgaming.com
            </p>
            <div className="custom-loader mt-10 mb-10"/>
            <p className="text-centner text-cool_gray">You will be redirected to the home Thanks...</p>
        </div>
    )
}

export default Thanks