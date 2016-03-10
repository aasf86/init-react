var React = require("react");

var ShoppingForm = React.createClass({
    getId: function(){
        if(!this._id){
            this._id = 1;
        }
        return this._id++;
    },
	handleSubmit: function(e) {
		e.preventDefault();
		var name = this.refs.name.value.trim(),
			ammount = this.refs.ammount.value.trim() || 1;
		if (!name) {
			return false;
		}
		this.props.onProductSubmit({name: name, ammount: ammount, id: this.getId()});
		//TODO: validação, salvar no server        
		this.refs.name.value = '';
		this.refs.ammount.value = '';
		return false;
	},
	render: function () {
		return (
			<div className="form-inline" role="form">
				<div className="form-group">
					<input type="text" placeholder="Produto" ref="name" className="form-control" />
				</div>
				<div className="form-group">
					<input type="number" placeholder="Quantidade" ref="ammount" className="form-control" />
				</div>
				<button className="btn btn-primary" onClick={this.handleSubmit}>adicionar ítem</button>
			</div>
		);
	}
});

module.exports = ShoppingForm;