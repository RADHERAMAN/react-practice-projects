import React, { useState } from 'react'
const ROLES = ["Fronted", "Backend", "AI-ENGINNER"];
export const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "Fronted",
        exprienced: "",
        cover: ""
    })
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    function set(field) {
        return (e) => setValues((v) => ({ ...v, [field]: e.target.value }))
    }

    function validate(v) {
        const e = {}
        if (!v.name.trim()) e.name = "Name is required"
        if (!v.email.trim()) e.email = "email is required"

        return e
    }
    function submit(ev) {
        ev.preventDefault()
        const e = validate(values)
        setErrors(e)
        if (Object.keys(e).length === 0) setSubmitted(true)
    }
    if (submitted) {

        return (
            <div>
                <h1>Form Submitted Successfully {values.name}</h1>
            </div>
        )
    }
    return (
        <div>
            <form onSubmit={submit} noValidate>
                <label>
                    Full name
                    <input value={values.name} onChange={set('name')} />
                    {errors.name && <span>{errors.name}</span>}

                </label>
                <label>
                    Email
                    <input value={values.email} onChange={set('email')} />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};
export default ManualForm;

