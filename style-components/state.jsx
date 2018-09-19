class Hello extends React.Component {
    
    constructor(){
        super();
        this.state = {
            message: "изначальное состояние ( this.state )"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
	
    updateMessage() {
        this.setState({
            message: "измененное состояние ( setState() )"
        });
    }
	
    render() {
         return (
           <div>
             <h1>Hello {this.state.message}!</h1>
			 <br />
             <button onClick={this.updateMessage}>Click me!</button>
           </div>   
        )
    }
}



ReactDOM.render(
	<Hello />,
	document.getElementById('hello')
);

//////////////////


















const Star = ({ selected=false, onClick=f=>f }) =>
<div className={(selected) ? "star selected" : "star"}
	onClick={onClick}>
</div>
Star.propTypes = {
	selected: PropTypes.bool,
	onClick: PropTypes.func
}
















