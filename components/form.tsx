import { useContext } from "react"
import { FormContext } from "../contexts/form"

export const Form = () => {
    const { form, setFormContext } = useContext(FormContext)
    return (

        <div>
            <div>
                <label htmlFor="name">名前</label>
                <input id="name" value={form.name} onChange={(e) => setFormContext({ ...form, name: e.target.value })} />
            </div>
            <div>
                <label htmlFor="age">年齢</label>
                <input id="age" value={form.age} onChange={(e) => setFormContext({ ...form, age: Number(e.target.value) })} />
            </div>
            <div>
                <label htmlFor="height">身長</label>
                <input id="height" value={form.height} onChange={(e) => setFormContext({ ...form, height: Number(e.target.value) })} />
            </div>
        </div>
    )
}
