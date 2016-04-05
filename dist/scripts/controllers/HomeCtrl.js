(function() {
	function HomeCtrl(Room, Modal) {
		this.chatRooms = Room.getRooms().all;
		this.newRoom = Modal;
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Modal', HomeCtrl]);
})();