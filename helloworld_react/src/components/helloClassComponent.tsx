import React from "react";

interface HelloProps {
    name: string
}

class HelloClassComponent extends React.Component<HelloProps> {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export default HelloClassComponent;