"use client";
import { createContext, useState } from "react"
import { usePathname } from "next/navigation"
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

    const [subscription, setSubscription] = useState(false)

    const handleStep = (path) => {
        router.push(path)
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

    const subscriptionHandler = () => {
        setSubscription(!subscription)
    }


    return (
        <FormContext.Provider value={{
            handleStep,
            handleInputChange,
            handleInputEmailChange,
            handleInputPhoneNumberChange,
            subscriptionHandler,
            name,
            isFieldNameValid,
            email,
            isFieldEmailValid,
            phoneNumber,
            isFieldPhoneNumberValid,
            subscription,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export {
    FormProvider
}

export default FormContext