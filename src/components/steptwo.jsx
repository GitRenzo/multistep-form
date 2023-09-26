"use client"
import Image from "next/image"
import useFormTool from "@/hooks/useFormTool"
function StepTwo() {

    const {
        handleStep, toggleState, toggleStateHandler,
        planChecked, planHandler,
        cart,
    } = useFormTool()

    return (
        <div className="container">
            <div>
                <h1>Select your Plan</h1>
                <p className="text-cool_gray mt-2">You have the option of monthly or year billing.</p>

                <div className="mt-2 md:mt-10">
                    <div className="grid grid-rows-1 md:grid-cols-3 gap-2 mb-10">
                        <div
                            onClick={() => planHandler(0, "Arcade", { monthly: 9, yearly: 90 })}
                            className={`${planChecked[0] ? "plan-selected" : "plan-box"}`}>
                            <div className="flex flex-row md:flex-col">
                                <Image
                                    className="md:mb-10 mr-5 md:mr-0"
                                    src={"/assets/images/icon-arcade.svg"} alt="Arcade image" height={30} width={30} />
                                <div>
                                    <p className="text-marine_blue font-medium">Arcade</p>
                                    <p className="text-cool_gray">{`${toggleState ? "90/yr" : "9/mo"}`}</p>
                                    <p className={`${toggleState ? "" : "hidden"} text-xs text-marine_blue w-full`}>2 months free</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => planHandler(1, "Advanced", { monthly: 12, yearly: 120 })}
                            className={`${planChecked[1] ? "plan-selected" : "plan-box"}`}>
                            <div className="flex flex-row md:flex-col">
                                <Image
                                    className="md:mb-10 mr-5 md:mr-0"
                                    src={"/assets/images/icon-advanced.svg"} alt="advanced image" height={30} width={30} />
                                <div>
                                    <p className="text-marine_blue font-medium">Advanced</p>
                                    <p className="text-cool_gray">{`${toggleState ? "120/yr" : "12/mo"}`}</p>
                                    <p className={`${toggleState ? "" : "hidden"} text-xs text-marine_blue w-full`}>2 months free</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => planHandler(2, "Pro", { monthly: 15, yearly: 150 })}
                            className={`${planChecked[2] ? "plan-selected" : "plan-box"}`}>
                            <div className="flex flex-row md:flex-col">
                                <Image
                                    className="md:mb-10 mr-5 md:mr-0"
                                    src={"/assets/images/icon-pro.svg"} alt="pro image" height={30} width={30} />
                                <div>
                                    <p className="text-marine_blue font-medium">Pro</p>
                                    <p className="text-cool_gray">{`${toggleState ? "150/yr" : "15/mo"}`}</p>
                                    <p className={`${toggleState ? "" : "hidden"} text-xs text-marine_blue w-full`}>2 months free</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center py-2 mt-5 bg-gray-100 rounded-xl items-center">
                        <p className={`mx-2  ${toggleState ? "text-cool_gray" : "text-marine_blue font-medium"}`}>
                            Monthly
                        </p>

                        <div className="mx-2">
                            <label className="switch">
                                <input type="checkbox" checked={toggleState} onChange={(e) => toggleStateHandler(e.target.checked)} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <p className={`mx-2 ${!toggleState ? "text-cool_gray" : "text-marine_blue font-medium"}`}>
                            Yearly
                        </p>
                    </div>
                </div>

            </div>

            <div className="fixed bottom-0 left-0 right-0 w-full md:static bg-white py-5 px-5 md:py-0 md:px-0 flex flex-row justify-between">
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



