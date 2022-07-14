import { createContext } from "react"
import { Form } from "../components/form"
import { defaultForm, FormContext, useForm } from "../contexts/form"


const Forms = () => {
    const ctx = useForm()
    return (
        <div>
            年齢: {ctx.form.age}
            <FormContext.Provider value={ctx}>
                <Form />
            </FormContext.Provider>
            <button
                onClick={() => ctx.setFormContext(defaultForm)}
            >
                リセット
            </button>
        </div>

    )
}

export default Forms