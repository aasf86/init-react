var React = require("react");

var Product = React.createClass({
	getInitialState: function() {
		return {checked: this.props.checked || false};
	},
	toggle: function () {
		this.setState({checked: !this.state.checked});
	},
    handleRemoveClick:  function () {
        if(this.props.onRemove){
            this.props.onRemove(this.props.key);
        }        
    },
	render: function () {
		var checked = (this.state.checked ? 'checked' : '');
        var className = checked ? "success" : "";
		return (
			<tr className={className} >
				<td><input type="checkbox" checked={checked} onClick={this.toggle} /></td>
				<td>{this.props.children}</td>
				<td>{this.props.ammount}</td>
                <td><button className="btn btn-danger" type="button" onClick={()=>this.handleRemoveClick()} title="removendo item">x</button></td>
			</tr>
		);
	}
});

module.exports = Product;