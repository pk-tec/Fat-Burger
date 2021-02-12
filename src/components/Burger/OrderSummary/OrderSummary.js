import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(ighKey) => {
				return (
					<li key={ighKey}>
						<span style={{ textTransform: "capitalize" }}>
							{ighKey}
						</span>
						: {this.props.ingredients[ighKey]}
					</li>
				);
			},
		);
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients: </p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button
					btnType="Success"
					clicked={this.props.purchaseContinued}
				>
					CONTINUE
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
