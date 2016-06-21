/**
 * Created by Venkat Talluri on 2/15/2016.
 */
(function () {
    'use strict';

    angular.module('common')
    .directive('stRecords', function () {
        return {
            restrict: 'E',
            require: '^stTable',
            template: '<div>{{size}} Records found</div>',
            link: function (scope, element, attr, ctrl) {
                scope.$watch(ctrl.getFilteredCollection, function(val) {
                    scope.size = (val || []).length;
                });
            }
        }
    });
})();
