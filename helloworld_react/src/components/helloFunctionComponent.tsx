import React from "react";

interface HelloProps {
    name: string
}

function HelloFunctionComponent(props: HelloProps) {
    return (
        <div>
            Hello {props.name}
        </div>
    );
}

export default HelloFunctionComponent;