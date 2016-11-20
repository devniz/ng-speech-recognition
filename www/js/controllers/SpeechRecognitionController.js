"use strict";

angular.module('starter').controller('SpeechRecognitionController', function ($scope, $rootScope) {

    var vm = this;

    vm.displayTranscript = displayTranscript;
    vm.transcript = '';

    /**
     * Handle the received transcript here.
     * The result from the Web Speech Recognition will
     * be set inside a $rootScope variable. You can use it
     * as you want.
     */
    function displayTranscript() {
        vm.transcript = $rootScope.transcript;

        //This is just to refresh the content in the view.
        if (!$scope.$$phase) {
            $scope.$digest();
        }
    }

})
