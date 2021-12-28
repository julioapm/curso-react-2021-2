import React from "react";

export default function MyButton() {
    const handleClick = () => {
        alert('Hello World!');
    };

    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Clicked: ' + event.currentTarget.name);
    };

    return (
        <button onClick={handleClick2} name="hello">
            Click Me
        </button>
    );
}