(function() {
	function HomeCtrl(Room, Modal){
		debugger
		this.chatRooms = Room.getRooms().all;
		this.newRoom = Modal;
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Modal', HomeCtrl]);
})();