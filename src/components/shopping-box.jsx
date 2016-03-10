var React = require("react");
var ShoppingTable = require('./shopping-table');
var ShoppingForm = require('./Shopping-form');

var ShoppingBox = React.createClass({
	handleProductSubmit: function(product) {
		var products = this.state.data;
		products.push(product);
		this.setState({data: products});
		// TODO: salvar no server
	},
	getInitialState: function() {
		return {data: []};
	},
    handleRemoveItem (key) {
        
        this.setState({
            data: this.state.data.filter(product => product.id != key)
        });
        
    },
	render: function () {
		return (
			<div>
				<h1>Minha Lista de Compras</h1>
				<ShoppingTable data={this.state.data} onRemoveProduct={this.handleRemoveItem} />
				<ShoppingForm onProductSubmit={this.handleProductSubmit} />
			</div>
		);
	}
});

module.exports = ShoppingBox;