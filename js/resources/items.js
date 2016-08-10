angular
  .module('shopApp')
  .factory('items', items); //inside our resources, we define our factory which takes in the function ITEM defined below

items.$inject = ['$resource', 'API']; //this API constant is defined in app.js

function items($resource, API) {  //using the API route, lets declare some methods which we will then define in the itemscontroller

  return $resource(
    API + '/:id',

    {id: '@id'},
    { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
      'update':    { method: 'PATCH' },
      // 'query':     { method: 'GET' },
    }
  );

}
