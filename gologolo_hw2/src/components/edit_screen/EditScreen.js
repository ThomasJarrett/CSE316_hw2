// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'
import EditTextScreen from './EditTextScreen.js'
import YesNoModal from './YesNoModal.js'
//test
export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false,
            editTextIsVis: false
        }
    }

    componentDidMount = () => {
        document.addEventListener('keydown',this.handlekeypress);
        console.log("\tEditScreen component did mount");
    }
    handlekeypress=(event)=>{
        
        if(event.ctrlKey && event.key==='z'){
           
            this.props.undoCallback();
            this.forceUpdate();
        }
        else{
            console.log("\tdid not read ctr+z, crtl="+ event.ctrlKey);
            if(event.ctrlKey && event.key==='y'){
               
                this.props.redoCallback();
                this.forceUpdate();
            }
        }
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
        document.removeEventListener('keydown',this.handlekeypress);
    }
    closeEditText = () => {
        document.addEventListener('keydown',this.handlekeypress);
        this.setState({editTextIsVis: false});
    }
    openEditText = () =>{
        document.removeEventListener('keydown',this.handlekeypress);
        this.setState({editTextIsVis: true});
    }
    addNewText = (newText) => {
        document.addEventListener('keydown',this.handlekeypress);
        if(newText!==this.props.logo.text)
            this.setState({editTextIsVis: false},this.props.addNewTextCallback(this.props.logo, newText));
        else
            this.setState({editTextIsVis: false});
    }
    showYNPrompt=()=>{
        document.removeEventListener('keydown',this.handlekeypress);
        this.setState({deleteModalVisible: true});
    }
    closeYNPrompt=()=>{
        document.addEventListener('keydown',this.handlekeypress);
        this.setState({deleteModalVisible: false});
    }
    deleteLogo=()=>{
        this.props.deleteCallback(this.props.logo.key);
    }
    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar goToHomeCallback={this.props.goToHomeCallback} deleteCallback={this.showYNPrompt}/>
                <div className="row" style={{display:"grid", position: "absolute",height: "90%",top: "10%",left: "5%",width: "90%"}}>
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}
                        redoCallback={this.props.redoCallback}
                        canRedo={this.props.canRedo}  
                        openEditText={this.openEditText}                       
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
                <EditTextScreen
                    isVisible={this.state.editTextIsVis}
                    text={this.props.logo.text}
                    closeCallback={this.closeEditText}
                    newText={this.addNewText}
                />
                <YesNoModal
                    noCallback={this.closeYNPrompt}
                    yesCallback={this.deleteLogo}
                    isVisible={this.state.deleteModalVisible}
                    /> 
            </div>
        )
    }
}

export default EditScreen