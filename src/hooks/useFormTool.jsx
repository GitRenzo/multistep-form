import { useContext } from "react"
import FormContext from "@/app/context/FormProvider.context"

const useFormTool = () => useContext(FormContext)

export default useFormTool