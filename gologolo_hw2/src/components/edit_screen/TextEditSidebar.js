import React, { Component } from 'react';
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
    handleRedo=()=>{
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.props.logo.textColor=event.target.value;
        this.setState({ textColor: event.target.value }, this.completeUserEditing(this.tempLogo));
    }

    handleBackgroundColorChange=(event) => {
        this.props.logo.backgroundColor=event.target.value;
        this.setState( {backgroundColor: event.target.value }, this.completeUserEditing(this.tempLogo));
    }
    handleBorderColorChange=(event)=>{
        this.props.logo.borderColor=event.target.value;
        this.setState( {borderColor: event.target.value }, this.completeUserEditing(this.tempLogo));
    }

    handleBorderRadiusChange=(event)=>{
        this.props.logo.borderRadius=event.target.value;
        this.setState( {borderRadius: event.target.value }, this.completeUserEditing(this.tempLogo));
    }

    handleBorderWidthChange=(event)=>{
        this.props.logo.borderWidth=event.target.value;
        this.setState( {borderWidth: event.target.value }, this.completeUserEditing(this.tempLogo));
    }

    handlePaddingChange=(event)=>{
        this.props.logo.padding=event.target.value;
        this.setState( {padding: event.target.value }, this.completeUserEditing(this.tempLogo));
    }
    handleMarginChange=(event)=>{
        this.props.logo.margin=event.target.value;
        this.setState( {margin: event.target.value }, this.completeUserEditing(this.tempLogo));
    }


    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.props.logo.fontSize=event.target.value;
        //console.log("new Logo "+this.logoToString(this.props.logo));
        //console.log("old Logo "+this.logoToString(this.tempLogo));
        this.setState({ fontSize: event.target.value }, this.completeUserEditing(this.tempLogo));
    }


    completeUserEditing = (tLogo) => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        //this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor);
    
        this.props.changeLogoCallback(tLogo, this.props.logo.key, this.props.logo.text, this.props.logo.textColor, this.props.logo.fontSize, this.props.logo.backgroundColor,this.props.logo.borderColor,
        this.props.logo.borderRadius,this.props.logo.borderWidth, this.props.logo.padding,this.props.logo.margin);

        //this.props.changeLogoCallback(this.props.logo, this.tempLogo.key, this.tempLogo.text, this.tempLogo.textColor, this.tempLogo.fontSize, this.tempLogo.backgroundColor,this.tempLogo.borderColor,
          // this.tempLogo.borderRadius,this.tempLogo.borderWidth, this.tempLogo.padding,this.tempLogo.margin);
    }
   
    //card-panel col s4
    render() {
        //const clone = require('lodash/clone');
        this.tempLogo=JSON.parse(JSON.stringify(this.props.logo));
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small";
        const styles = {
            container: {
                margin: "0px"
            }
        };
        if (undoDisabled)
            undoClass += " disabled";
        if (!this.props.canRedo())
            redoClass += " disabled";
        return (
            <div className="" style={{width : "30%",position:"absolute", top: "0%", left: "0%", height: "100%"}}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small">&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row" style={styles.container}>
                            <span className="">Color:</span>
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Font Size: {""+this.props.logo.fontSize}</span>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} 
                                    style={styles.container}/>
                            
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
                            <span>Border Radius: {""+this.props.logo.borderRadius}</span>
                                <input type="range" min="0" max="100"
                                       onChange={this.handleBorderRadiusChange}
                                       value={this.props.logo.borderRadius} 
                                       style={styles.container}
                                />
                            
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Border Width: {""+this.props.logo.borderWidth}</span>
                                <input type="range"
                                       onChange={this.handleBorderWidthChange}
                                       value={this.props.logo.borderWidth}
                                       style={styles.container} 
                                />
                            
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Padding:{""+this.props.logo.padding}</span>                   
                                <input type="range"
                                       onChange={this.handlePaddingChange}
                                       value={this.props.logo.padding} 
                                       style={styles.container}
                                />
                        </div>
                        <div className="row" style={styles.container}>
                            <span>Margin:{""+this.props.logo.margin}</span>
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
      // CREATES AND RETURNS A TEXTUAL SUMMARY OF logoToDisplay
  logoToString = (logoToDisplay) => {
    let text = "";
    text += "{\n";
    text += "\ttext: " + logoToDisplay.text + "\n";
    text += "\ttextColor: " + logoToDisplay.textColor + "\n";
    text += "\tfontSize: " + logoToDisplay.fontSize + "\n";
    text += "\tbackgroundColor: "+ logoToDisplay.backgroundColor+"\n";
    text += "\tborderColor: "+ logoToDisplay.borderColor+"\n";
    text += "\tborderRadius: "+ logoToDisplay.borderRadius+"\n";
    text += "\tborderWidth: "+ logoToDisplay.borderWidth+"\n";
    text += "\tpadding: "+ logoToDisplay.padding+ "\n";
    text += "\tmargin: "+ logoToDisplay.margin+"\n";
    text += "}";
    return text;
  }
}

export default TextEditSidebar