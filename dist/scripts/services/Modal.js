(function() {
	function Modal($uibModal) {
		var newChatRoom = function() {
			
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: function ($scope, $uibModalInstance) {
					$scope.cancel = function() {
						Modal.dismiss('Cancel');
					};
		
					$scope.create = function() {
						Modal.close();
					};
				},
				size: 'sm'	
			});
		}	
		
		return newChatRoom();
	}
	
	angular
		.module('blocChat')
		.factory('Modal', ['$uibModal', Modal]);
})();