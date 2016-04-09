(function() {
	function HomeCtrl(Room, $uibModal){
		var vm = this;
		vm.chatRooms = Room.getRooms().all;
        vm.selectRoom = function(room) {
			vm.selectedRoom = room;
			vm.messages = Room.getMessages(this.selectedRoom.$id);
		}
		
		vm.openModal = function() {
			var modal_instance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: function ($scope, $uibModalInstance) {
					$scope.newRoom = {name: ''};
					$scope.cancel = function() {
						$uibModalInstance.dismiss('cancel');
					};
		
					$scope.create = function() {
						$uibModalInstance.close($scope.newRoom);
					};
				},
				size: 'md',
			});
			
			modal_instance.result.then(function(data) {
				Room.addRoom(data);
			});
		};
	};
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();