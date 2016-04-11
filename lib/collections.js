Hackers = new Mongo.Collection("hackers");

if (Meteor.isServer) {
	console.log("test is working");
	Meteor.publish('hackers', function hackersPublication(){
		return Hackers.find({'allegiance':'White Hat'});
});
}

