/**
 * Created by Venkat Talluri on 12/5/2015.
 */

(function () {
    'use strict';

    angular
        .module('common')
        .filter('titleCase', function () {
            return function (input) {
                input = input || '';
                return input.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            };
        })
})();
