"use client"
import useFormTool from "@/hooks/useFormTool"
function AddOnsSelected({ index }) {

    const { cart, toggleState } = useFormTool()
    return (
        <div className={`${cart.addOns[index].name.length === 0 ? "hidden": "flex flex-row justify-between"} mb-2`}>
            <p className="text-cool_gray text-sm">{cart.addOns[index].name}</p>
            <p>{`+${toggleState ? `${cart.addOns[index].price.yearly} /yr` : `${cart.addOns[index].price.monthly} /mo`}`}</p>
        </div>
    )
}

export default AddOnsSelected