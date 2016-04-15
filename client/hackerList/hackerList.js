Template.hackerList.onCreated(function () {
	Meteor.subscribe('hackers');
	
});

Template.hackerList.helpers({
	'hackers':function(){
		return Hackers.find();
	},

	'createdByUser': function() {
		return this.createdBy === Meteor.userId();
	}
});





