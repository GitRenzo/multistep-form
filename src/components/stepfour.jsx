"use client"
import useFormTool from "@/hooks/useFormTool"
import AddOnsSelected from "./addOnsSelected"

function StepFour() {
    const { handleStep, toggleState, cart, totalPrice } = useFormTool()
    return (
        <div className="container">
            <div>
                <h1>Finishing up</h1>
                <p className="text-cool_gray mt-2">Double-check everything looks OK before confirming</p>
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col justify-center py-5 bg-gray-50 rounded-lg mt-10 px-4">
                        <div className="flex flex-row justify-between">
                            <div className="mb-5">
                                <p className="text-marine_blue font-medium">{`${cart.planName} (${(cart.subscription)})`}</p>
                                <button onClick={() => handleStep("/select-a-plan")}className="text-cool_gray text-sm underline">Change</button>
                            </div>
                            <p className="text-marine_blue font-medium">{`$${toggleState ? `${cart.planPrice.yearly} /yr` : `${cart.planPrice.monthly} /mo`}`}</p>
                        </div>
                        <hr className="divide-solid mb-5" />

                        <div className="flex flex-col justify-between">
                            {cart.addOns.map((value, index) => (
                                <AddOnsSelected key={index} index={index}/>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between px-4">
                        <p className="text-cool_gray text-sm">{`Total ${toggleState ? "/yr" : "/mo"}`}</p>
                        <p className="text-xl text-purplish_blue font-bold">{`+$${totalPrice} ${toggleState ? "/yr" : "/mo"}`}</p>
                    </div>

                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 w-full md:static bg-white py-5 px-5 md:py-0 md:px-0 flex flex-row justify-between">
                <button
                    onClick={() => handleStep("/add-ons")}
                    className="text-cool_gray hover:text-marine_blue"
                >
                    Go Back
                </button>


                <button
                    className="hover:bg-red-600"
                    onClick={() => handleStep("/thanks")}
                    type="submit"
                >
                    Confirm
                </button>
            </div>
            
        </div>
    )
}

export default StepFour