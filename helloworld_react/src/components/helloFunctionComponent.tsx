import React from "react";

interface HelloProps {
    name: string,
    age?: number
}

function HelloFunctionComponent(props: HelloProps) {
    const ageText = props.age ? `Your are ${props.age} years old` : 'How old are you ?';
    return (
        <div>
            Hello {props.name}<br />
            {ageText}
        </div>
    );
}

export default HelloFunctionComponent;