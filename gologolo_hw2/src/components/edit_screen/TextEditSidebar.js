import React, { Component } from 'react'

class TextEditSidebar extends Component {
    constructor() {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#00FF00",
            fontSize : 24,
            backgroundColor : "#FF0000",
            borderColor : "FF0000",
            borderRadius : 10,
            borderWidth : 5,
            padding : 5,
            margin : 5
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.props.logo.textColor=event.target.value;
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange=(event) => {
        this.props.logo.backgroundColor=event.target.value;
        this.setState( {backgroundColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderColorChange=(event)=>{
        this.props.logo.borderColor=event.target.value;
        this.setState( {borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange=(event)=>{
        this.props.logo.borderRadius=event.target.value;
        this.setState( {borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderWidthChange=(event)=>{
        this.props.logo.borderWidth=event.target.value;
        this.setState( {borderWidth: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange=(event)=>{
        this.props.logo.padding=event.target.value;
        this.setState( {padding: event.target.value }, this.completeUserEditing);
    }
    handleMarginChange=(event)=>{
        this.props.logo.margin=event.target.value;
        this.setState( {margin: event.target.value }, this.completeUserEditing);
    }


    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.props.logo.fontSize=event.target.value;
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        //this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.props.logo.textColor, this.props.logo.fontSize, this.props.logo.backgroundColor,this.props.logo.borderColor,
        this.props.logo.borderRadius,this.props.logo.borderWidth, this.props.logo.padding,this.props.logo.margin);
    }
    //card-panel col s4
    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        const styles = {
            container: {
                margin: "0px"
            }
        };
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="" style={{width : "40%"}}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small">&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} 
                                    style={styles.container}/>
                            </div>
                        </div>
                        <div className="row" style={styles.container}>
                            <span className="">Backround Color:</span>
                            
                                <input type="color"
                                       onChange={this.handleBackgroundColorChange}
                                       value={this.props.logo.backgroundColor} 
                                       
                                />
                            
                        </div>
                        <div className="row" style={styles.container}>
                            <span >Border Color:</span>
                                <input type="color"
                                       onChange={this.handleBorderColorChange}
                                       value={this.props.logo.borderColor} 
                                />
                            
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Border Radius:</span>
                                <input type="range" min="0" max="100"
                                       onChange={this.handleBorderRadiusChange}
                                       value={this.props.logo.borderRadius} 
                                       style={styles.container}
                                />
                            
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Border Width:</span>
                                <input type="range"
                                       onChange={this.handleBorderWidthChange}
                                       value={this.props.logo.borderWidth}
                                       style={styles.container} 
                                />
                            
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Padding:</span>                   
                                <input type="range"
                                       onChange={this.handlePaddingChange}
                                       value={this.props.logo.padding} 
                                       style={styles.container}
                                />
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Margin:</span>
                                <input type="range"
                                       onChange={this.handleMarginChange}
                                       value={this.props.logo.margin} 
                                       style={styles.container}
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar