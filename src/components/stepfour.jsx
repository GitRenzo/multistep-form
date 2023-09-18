"use client"
import useFormTool from "@/hooks/useFormTool"

function StepFour() {
    const { handleStep } = useFormTool()
    return (
        <div className="container">
            <div>
                <h1>Finishing up</h1>
                <p className="text-cool_gray mt-2">Double-check everything looks OK before confirming</p>
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col justify-center py-5 bg-gray-50 rounded-lg mt-10 px-4">
                        <div className="flex flex-row justify-between">
                            <div className="mb-5">
                                <p className="text-marine_blue font-medium">Arcade (Monthly)</p>
                                <button className="text-cool_gray text-sm underline">Change</button>
                            </div>
                            <p className="text-marine_blue font-medium">$9/mo</p>
                        </div>
                        <hr className="divide-solid mb-5" />

                        <div className="flex flex-row justify-between">
                            <p className="text-cool_gray text-sm">Online service</p>
                            <p>+1$/mo</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between px-4">
                        <p className="text-cool_gray text-sm">Total (per month)</p>
                        <p className="text-xl text-purplish_blue font-bold">+$55/mo</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-row justify-between">
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