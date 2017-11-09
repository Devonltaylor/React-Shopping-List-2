
import React, { Component } from 'react';
// import "font-awesome/css/font-awesome.css";
class ShoppingList extends Component {

    render() {

        return (
            <div className="ShoppingList">

                <div className="List_item">{this.props.listItems.item}</div>
                <div className="List_cost">{this.props.listItems.cost}</div>
                <button className="List__delete-button"
                        title={"Delete " + this.props.listItems.item}
                        onClick={this.props.onDelete}>
                    <i className="fa fa-trash fa-lg"></i>
                </button>
            </div>
        );
    }
}
export default ShoppingList;
