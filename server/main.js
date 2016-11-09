import { Meteor } from 'meteor/meteor';

Items = new Mongo.Collection('items');
Articles = new Mongo.Collection('articles');

Meteor.startup(() => {
	/*var user = {
		      username: "test@test.com",
		      password: "123",
		      profile: {
		          name: "Daniel Abrantes",
		          admin: false
		      }};
	
	var userid = Accounts.createUser(user);
	console.log(userid);*/

  // code to run on server at startup
  Articles.remove({});

  let articleId = Articles.insert({
  	name:"Test article",
  });

  console.log(articleId);
});


// Global API configuration
const Api = new Restivus({
	apiPath: 'api/',
    defaultHeaders: {
      'Content-Type': 'application/json'
    },
    onLoggedIn: function () {
      console.log(this.user.username + ' (' + this.userId + ') logged in');
    },
    onLoggedOut: function () {
      console.log(this.user.username + ' (' + this.userId + ') logged out');
    },
    prettyJson: true,
    useDefaultAuth: true,
    version: 'v1'
});

Api.addRoute('sync', {authRequired: true}, {
	get:{
		authRequired: false,
		action:function(){
			return Articles.findOne({});
		}
	},
});

// Maps to: /api/articles/:id
/*Api.addRoute('articles', {authRequired: true}, {
	get:{
		authRequired: false,
		action:function(){
			return Articles.findOne({});
		}
	},
	delete: {
	  roleRequired: ['author', 'admin'],
	  action: function () {
	    if (Articles.remove(this.urlParams.id)) {
	      return {status: 'success', data: {message: 'Article removed'}};
	    }
	    return {
	      statusCode: 404,
	      body: {status: 'fail', message: 'Article not found'}
	    };
	  }
	}
});*/