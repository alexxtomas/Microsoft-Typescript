/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

type SortOrder = 'ascending' | 'descending'
class BuildArray {
  // TODO Define the properties
  private _items: number
  private _sortOrder: SortOrder
  // TODO Define the constructor
  constructor(items: number, sortOrder: SortOrder) {
    this._items = items
    this._sortOrder = sortOrder
  }
  // TODO Define the accessors
  get items() {
    return this._items
  }
  set items(newItems: number) {
    this._items = newItems
  }
  get sortOrder() {
    return this._sortOrder
  }
  set sortOrder(newSortOrder: SortOrder) {
    this._sortOrder = newSortOrder
  }

  // TODO Define the methods
  public buildArray() {
    const array = Array.from({ length: this._items }, (_, index) => index + 1)
    return this._sortOrder === 'ascending' ? this.sortAscending(array) : this.sortDescending(array)
  }
  private sortAscending(array: number[]) {
    return array.sort((a, b) => a - b)
  }
  private sortDescending(array: number[]) {
    return array.sort((a, b) => b - a)
  }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending')
let testArray2 = new BuildArray(8, 'descending')
console.log(testArray1.buildArray())
console.log(testArray2.buildArray())
