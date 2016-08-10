angular
  .module("shopApp")
  .controller("ItemsController", ItemsController);

  ItemsController.$inject = ['$resource', 'items']; //injecting factory and model

function ItemsController($resource, items){
  console.log(items);
  console.log(items.query());

  //GET ALL THE ITEMS
  var self = this;
  self.all = []; //this is where you store all instances/items, that is pushed from the form (self.items)
  self.items = {};  //this is the data of the new instance we get from the form
  console.log(self.items);

  self.getItems = function() {
    self.all = items.query(); //grab all the items/instances from the api and push it into self.all array.
  };
  self.getItems();


  //ADD NEW OR EDIT AN ITEM
  this.addItem = function() {
    if (self.items.id) {  //if this item object has an id value already, then update the item. if it doesnt, means this items doesnt exists and lets you add instead of update
      console.log(self.items)
      items.update(self.items, function(items){ //updates the existing item object to whatever user inputs into the form
        self.items = {};    //as soon as it updates, make the form field empty
        console.log(self.items)
      });
    } else {
      console.log(self.items)
      items.save(self.items, function(items) { //create this new item object by grabbing it from the form data
        self.all.push(items); //after grabbing it from the form data, push it to self.all Array
        self.items = {} //after pushing into the array, make the form field empty
        console.log(self.items)
      });
    }
  };

  // // DELETE ITEM
  this.deleteItem = function(x){
    console.log(x);
    items.remove({id: x.id});
    var index = self.all.indexOf(x);
    self.all.splice(index, 1);
  }

  // Fill the form to EDIT ITEM
  this.editItem = function(items){ //pass the whole item object into this function
    console.log(items)
    self.items = items; //grabs the item object and puts it in the form data
  }






  return self;
}
