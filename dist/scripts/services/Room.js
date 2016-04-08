(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase('https://blistering-fire-7074.firebaseio.com');
		var roomRef = $firebaseArray(firebaseRef.child('rooms'));
		
		var rooms = {
			getRooms: getRooms,
			addRoom: addRoom
		};
		
		return rooms;
		
		function getRooms() {
			return {
				all: roomRef
			}
		}
		
		function addRoom(name) {
			roomRef.$add(name);
		}
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
