import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius+ "px",
                borderWidth: this.props.logo.borderWidth+"px",
                padding: this.props.logo.padding+"px",
                margin: this.props.logo.margin+"px",
                borderStyle: "solid",
                position: "absolute",    
                top: "10%",
                left: "41.5%"
            }
        }
        //col s8
        return (
            <div className=""
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace