var React = require("react");
var Product = require("./product");

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

console.log(Product);
var ShoppingTable = React.createClass({
    handleRemoveItem: function (product) {       
        if(this.props.onRemoveProduct){
            this.props.onRemoveProduct(product.id);
        }           
    },
	render: function () {
        
		var productNodes = this.props.data.map((product) => {
			return <Product onRemove={() => this.handleRemoveItem(product)} key={product.id} ammount={product.ammount} checked={product.checked}>{product.name}</Product>;
		});
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Comprado?</th>
						<th>Produto</th>
						<th>Quantidade</th>
					</tr>
				</thead> 
                    <ReactCSSTransitionGroup component="tbody" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {productNodes}
                    </ReactCSSTransitionGroup>
                    
			</table>
		);
	}
});

module.exports = ShoppingTable;