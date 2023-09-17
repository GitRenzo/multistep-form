"use client"
import useFormTool from "@/hooks/useFormTool"

function StepThree() {
    return (
        <div className="container">
            <div>
                <h1>Pick Add-ons</h1>
                <p className="text-cool_gray mt-2">Add-ons help enhance your gaming experience.</p>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
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

export default StepThree