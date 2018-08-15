import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
    arrayMove,
} from 'react-sortable-hoc';
import RowComponent from './RowComponent';

const values = [
    { id: 1, name: "Lina", team: "Ajax" },
    { id: 2, name: "Lisa", team: "PSV" },
    { id: 3, name: "Lira", team: "Utrecht" },
    { id: 4, name: "Lima", team: "Roda" },
    { id: 5, name: "Lita", team: "Feyenoord" }
];

//const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want

const SortableItem = SortableElement(({ value }) => {
    return (
        <tbody>
            {value}
        </tbody>
    );
});

const SortableList = SortableContainer(({ items }) => {
    return (
        <table>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </table>
    );
});

class SortableComponent extends Component {
    deleteRow = (rowId) => {
        console.log("Deleting", rowId);
        const newRow = this.state.itemValues.filter((value) => value.id !== rowId);
        this.setState({
            items: newRow.map((value, index) => (<RowComponent row={value} deleteRow={this.deleteRow} />)),
            itemValues: newRow
        });


    };

    state = {
        items: values.map((value, index) => (<RowComponent row={value} deleteRow={this.deleteRow} />)),
        itemValues: values
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        const { items, itemValues } = this.state;

        this.setState({
            items: arrayMove(items, oldIndex, newIndex),
            itemValues: arrayMove(itemValues, oldIndex, newIndex),
        });
    };

    sorter = () => {
        console.log("Let's sort");       

        const newValues = this.state.itemValues.sort((a,b) => (
            (a.team > b.team) ? 1 : -1
        ));
        this.setState({
            items: newValues.map((value, index) => (<RowComponent row={value} deleteRow={this.deleteRow} />)),
            itemValues: newValues
        });
        
    };


    render() {
        const { items, itemValues } = this.state;
        console.log("On Drag", itemValues);

        return (
            <div>
                <button onClick={this.sorter}>Sort Me</button>
            <SortableList items={items} onSortEnd={this.onSortEnd} pressDelay={100} useDragHandle={false} />
            </div>
        );
    }
}

export default SortableComponent;