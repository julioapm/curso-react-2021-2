import React, { useState } from "react";

interface FormData {
    name: string,
    jedi: boolean
}

function ControlledForm() {
    const [formData, setFormData] = useState<FormData>({name:'', jedi: false});

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleJediChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
        });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        alert(`You submitted the form: ${formData.name} ${formData.jedi}`);
    };

    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" value={formData.name} onChange={handleNameChange}/>
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type="checkbox" name="jedi" checked={formData.jedi} onChange={handleJediChange}/>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ControlledForm;