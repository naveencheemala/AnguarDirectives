/**
 * Created by Venkat Talluri on 12/5/2015.
 */
(function () {
    'use strict';

    angular
        .module('common')
        .directive('capitalizeFirst', function ($parse) {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, modelCtrl) {
                    var capitalize = function (inputValue) {
                        if (inputValue === undefined) {
                            inputValue = '';
                        }
                        //var capitalized = inputValue.charAt(0).toUpperCase() +
                        //    inputValue.substring(1).toLowerCase();
                        var capitalized = inputValue.replace(/\w\S*/g, function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        });
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }
                        return capitalized;
                    }
                    modelCtrl.$parsers.push(capitalize);
                    capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
                }
            };
        });
})();


