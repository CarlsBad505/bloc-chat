(function() {
	function Room($firebaseArray) {
		
		var rooms = {
			getRooms: getRooms
		};
		
		return rooms;
		
		function getRooms() {
			var firebaseRef = new Firebase('https://blistering-fire-7074.firebaseio.com');
			var roomRef = $firebaseArray(firebaseRef.child('rooms'));
// 			Only Need to add these Default Rooms in Once, upon initiation of DB.
//			roomRef.$add({ name: "Room 1" });
//			roomRef.$add({ name: "Room 2" });
//			roomRef.$add({ name: "Room 3" });
			return {
				all: $firebaseArray(firebaseRef.child('rooms'))
			}
		}
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();