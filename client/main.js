import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    /*$.post( "http://localhost:5000/api/v1/login", { username: "test@test.com", password: "123" })
	  .done(function( data ) {
	    console.log( data );
	  });*/


  },
});

Template.hello.events({
  'click button'(event, instance) {
  	$.post( "http://localhost:5000/api/v1/login", { username: "test@test.com", password: "123" })
	  .done(function( data ) {
	    console.log( data );
	  });
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
