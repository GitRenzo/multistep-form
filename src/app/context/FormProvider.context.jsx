"use client";
import { createContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation";
// helpers
import { ValidateString, ValidateEmail, ValidatePhoneNumber } from "../../helpers/validateFields"

const FormContext = createContext()
function FormProvider({ children }) {
    const router = useRouter()

    const [name, setName] = useState("")
    const [isFieldNameValid, setIsFieldNameValid] = useState(true)

    const [email, setEmail] = useState("")
    const [isFieldEmailValid, setIsFieldEmailValid] = useState(true)

    const [phoneNumber, setPhoneNumber] = useState("")
    const [isFieldPhoneNumberValid, setIsFieldPhoneNumberValid] = useState(true)

    const [toggleState, setToggleState] = useState(false)

    const [planChecked, setPlanChecked] = useState([false, true, false])
    const [addOns, setAddOns] = useState([false, false, false])

    const [cart, setCart] = useState({ planName: "Advanced", planPrice: { monthly: 12, yearly: 120 }, subscription: "Monthly", addOns: [{ name: "", price: { monthly: 0, yearly: 0 } }, { name: "", price: { monthly: 0, yearly: 0 } }, { name: "", price: { monthly: 0, yearly: 0 } }] })
    const [totalPrice, setTotalPrice] = useState(0)

    const resetValues = () => {
        setName("")
        setIsFieldNameValid(true)
        setEmail("")
        setIsFieldEmailValid(true)
        setPhoneNumber("")
        setIsFieldPhoneNumberValid(true)

        setToggleState(false)

        setPlanChecked([false, true, false])
        setAddOns([false, false, false])
        setCart({ planName: "Advanced", planPrice: { monthly: 12, yearly: 120 }, subscription: "Monthly", addOns: [{ name: "", price: { monthly: 0, yearly: 0 } }, { name: "", price: { monthly: 0, yearly: 0 } }, { name: "", price: { monthly: 0, yearly: 0 } }] })

        setTotalPrice(0)
    }
 
    useEffect(() => {
        let newPlanPrice = 0
        let newAddOnsPrice = 0


        if (toggleState) {
            newPlanPrice = cart.planPrice.yearly;
            newAddOnsPrice = cart.addOns.reduce((accumulator, currentAddOn) => {
                return accumulator + currentAddOn.price.yearly;
            }, 0);
        }
        else {
            newPlanPrice = cart.planPrice.monthly
            newAddOnsPrice = cart.addOns.reduce((accumulator, currentAddOn) => {
                return accumulator + currentAddOn.price.monthly;
            }, 0);
        }

        setTotalPrice(newAddOnsPrice + newPlanPrice)
    }, [cart, toggleState])


    const handleStep = (path) => {
        router.push(path, { shallow: true })
    }

    const handleInputChange = (inputValue) => {
        setName(inputValue)
        setIsFieldNameValid(ValidateString(inputValue, /^ *[A-Za-z]+( [A-Za-z]+)* *$/))
    }

    const handleInputEmailChange = (inputValue) => {
        const emailRegex = /^(?!.*\s)([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})$/;
        setEmail(inputValue)
        setIsFieldEmailValid(ValidateEmail(inputValue, emailRegex))
    }

    const handleInputPhoneNumberChange = (inputValue) => {
        setPhoneNumber(inputValue)
        setIsFieldPhoneNumberValid(ValidatePhoneNumber(inputValue, /^\+?\d+$/))
    }

    const toggleStateHandler = (checked) => {
        setToggleState(!toggleState)
        if (checked) {
            setCart({ ...cart, subscription: "Yearly" })
        }
        else {
            setCart({ ...cart, subscription: "Monthly" })
        }
    }

    const planHandler = (planPosition, planName, planPrice) => {
        setCart({ ...cart, planName: planName, planPrice: planPrice })
        const newPlan = planChecked.map((value, index) => index === planPosition ? !value : false)
        setPlanChecked(newPlan)
    }

    const handleAddOns = (checkBoxValue, addOnPosition, addOnDetails) => {

        const addOnsSelected = addOns.map((value, index) => addOnPosition === index ? !value : value)
        const udpatedAddons = cart.addOns.map((value, index) =>
            (checkBoxValue && addOnPosition === index) ?
                addOnDetails
                :
                (!checkBoxValue && addOnPosition === index) ?
                    { name: "", price: { monthly: 0, yearly: 0 } }
                    :
                    value
        )

        setAddOns(addOnsSelected)
        setCart({ ...cart, addOns: udpatedAddons })
    }


    return (
        <FormContext.Provider value={{
            handleStep,
            handleInputChange,
            handleInputEmailChange,
            handleInputPhoneNumberChange,
            toggleStateHandler,
            planHandler,
            handleAddOns,
            resetValues,
            name,
            isFieldNameValid,
            email,
            isFieldEmailValid,
            phoneNumber,
            isFieldPhoneNumberValid,
            toggleState,
            planChecked,
            addOns,
            cart,
            totalPrice,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export {
    FormProvider
}

export default FormContext