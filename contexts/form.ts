import { createContext, useCallback, useState } from "react";

export const defaultForm = {
    name: "",
    age: 0,
    height: 0,
}

type FormContext = {
    form: {
        name: string,
        age: number,
        height: number,
    }
    setFormContext: (form: {
        name: string,
        age: number,
        height: number,
    }) => void;
}

const defaultContext: FormContext = {
    form: defaultForm,
    setFormContext: () => { }
}

export const FormContext = createContext<FormContext>(defaultContext);

export const useForm = (): FormContext => {
    const [form, setForm] = useState(defaultForm);

    const setFormContext = useCallback((arg: { name: string, age: number, height: number }): void => {
        setForm(arg)
    }, [])

    return {
        form,
        setFormContext
    }
}
