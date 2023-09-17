"use client"
import Image from "next/image"
import useFormTool from "@/hooks/useFormTool"
function StepTwo() {

    const { handleStep, subscription, subscriptionHandler } = useFormTool()
    console.log(subscription);
    return (
        <div className="container">
            <div>
                <h1>Select your Plan</h1>
                <p className="text-cool_gray mt-2">You have the option of monthly or year billing.</p>

                <div className="mt-10 mb-20">
                    <div className="grid grid-cols-3 gap-2 mb-10">
                        <div className="plan-box">
                            <Image
                                className="mb-10"
                                src={"/assets/images/icon-arcade.svg"} alt="Arcade image" height={30} width={30} />
                            <p className="text-marine_blue font-medium">Arcade</p>
                            <p className="text-cool_gray">$9/Mo</p>
                        </div>
                        <div className="plan-box">
                            <Image
                                className="mb-10"
                                src={"/assets/images/icon-advanced.svg"} alt="Arcade image" height={30} width={30} />
                            <p className="text-marine_blue font-medium">Advanced</p>
                            <p className="text-cool_gray">$12/Mo</p>
                        </div>
                        <div className="plan-box">
                            <Image
                                className="mb-10"
                                src={"/assets/images/icon-pro.svg"} alt="Arcade image" height={30} width={30} />
                            <p className="text-marine_blue font-medium">Pro</p>
                            <p className="text-cool_gray">$15/Mo</p>
                        </div>
                    </div>

                    <div className="flex justify-center py-2 mt-5 bg-gray-100 rounded-xl items-center">
                        <p className={`mx-2  ${subscription ? "text-cool_gray" : "text-marine_blue font-medium"}`}>
                            Monthly
                        </p>

                        <div className="mx-2">
                            <label className="switch">
                                <input type="checkbox" checked={subscription} onChange={subscriptionHandler} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <p className={`mx-2 ${!subscription ? "text-cool_gray" : "text-marine_blue font-medium"}`}>
                            Yearly
                        </p>
                    </div>
                </div>

            </div>

            <div className="flex flex-row justify-between">
                <button
                    onClick={() => handleStep("/")}
                    className="text-cool_gray hover:text-marine_blue"
                >
                    Go Back
                </button>

                <button
                    onClick={() => handleStep("/add-ons")}
                    type="button"
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default StepTwo



