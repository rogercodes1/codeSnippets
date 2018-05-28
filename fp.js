// OOP
class GroceryList{
   constructor(items){
      this.items = items }
   addItem(item) {
      this.items.push(item)
   }
}
class GroceryItem{
   constructor(items){
      this.items = items }
   addItem(item) {
      this.items.push(item)
   }
}
// Functional Programming:
function addItem(list, item){
   return list.concat(item)
}


// Creating Data:
// OOP
var myGroceryList = new GroceryList([
   new GroceryItem("banana", 2.99),
   new GroceryItem("beer",12.99 ),
   new GroceryItem("apples", 0.98 )
])

// FP
const myGroceyList = [
   {name: "banana",price: 2.99},
   {name: "Beer",price: .99},
   {name: "Apples",price: .99}
]
