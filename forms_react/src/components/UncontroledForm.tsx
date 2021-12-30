import React, { useRef } from "react";

function UncontrolledForm() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const jediCheckboxRef = useRef<HTMLInputElement>(null);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        alert(`You submitted the form: ${nameInputRef.current?.value} ${jediCheckboxRef.current?.checked}`);
    };

    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" ref={nameInputRef}/>
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type="checkbox" name="jedi" ref={jediCheckboxRef}/>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default UncontrolledForm;