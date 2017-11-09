import React, { Component } from 'react';

import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: [
                {
                  item: "Milk",
                  cost: "2",
                },
                {
                  item: "Eggs",
                  cost: "3",
                },
                {
                  item: "Butter",
                  cost: "4",
                }
            ]
        };
    }

    render() {
        const listItems = this.state.listItems.map((listItem, index) => (
            <ShoppingList key={listItem.item} listItems={listItem} onDelete={() => this.removeItem(index)}/>
        ));


//how to get the total cost of items
var total =  0
this.state.listItems.map((item) =>
total+=parseInt(item.cost)
);
        return (
            <div className="App">
                <h1>Shopping List</h1>
                <p className="total" > {"It's going to cost you: $ " + total}</p>
                <div className="List_items">
                    {listItems}
                    <ItemForm onSubmit={this.addItem.bind(this)}/>

                </div>
                </div>
        );
    }
    addItem(listItems) {
        this.setState(prevState => {
            const newItems = prevState.listItems.slice(0);
            newItems.push(listItems);
            return { listItems: newItems };
        });
    }

    removeItem(index) {
        this.setState(prevState => {
            const newItems = prevState.listItems.slice();
            newItems.splice(index, 1);
            return { listItems: newItems };
        });
    }


}
export default App;
