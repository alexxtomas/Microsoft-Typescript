"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
class BuildArray {
    // TODO Define the properties
    _items;
    _sortOrder;
    // TODO Define the constructor
    constructor(items, sortOrder) {
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(newItems) {
        this._items = newItems;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(newSortOrder) {
        this._sortOrder = newSortOrder;
    }
    // TODO Define the methods
    buildArray() {
        const array = Array.from({ length: this._items }, (_, index) => index + 1);
        return this._sortOrder === 'ascending' ? this.sortAscending(array) : this.sortDescending(array);
    }
    sortAscending(array) {
        array.sort((a, b) => a - b);
    }
    sortDescending(array) {
        array.sort((a, b) => b - a);
    }
}
/*  TODO: Instantiate the BuildArray objects. */
let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
