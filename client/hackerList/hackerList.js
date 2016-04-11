Meteor.subscribe('hackers');

Template.hackerList.helpers({
	'hackers':function(){
		return Hackers.find();
	}
})

