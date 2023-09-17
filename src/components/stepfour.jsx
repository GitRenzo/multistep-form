"use client"
import useFormTool from "@/hooks/useFormTool"

function StepFour() {
    return (
        <div className="container">
            <div>
                <h1>Finishing up</h1>
                <p className="text-cool_gray mt-2">Double-check everything looks OK before confirming</p>
            </div>
            <div>

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
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default StepFour