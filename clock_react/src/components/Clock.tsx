import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        function tick() {
            setTime(new Date());
        }
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    });

    return (
        <div>
            <h1>Clock:</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;