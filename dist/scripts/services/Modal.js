(function() {
	function Modal($uibModal) {
		function newChatRoom() {
		
			return $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: function ($scope, $uibModalInstance) {
					$scope.cancel = function() {
						$uibModalInstance.dismiss('Cancel');
					};
		
					$scope.create = function() {
						$uibModalInstance.close();
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