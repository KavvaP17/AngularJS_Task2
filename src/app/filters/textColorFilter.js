angular.module('rootModule')
    .filter('textColor', function(){
        return function(text){
            switch (text[0]) {
                case 'A':
                    return 'blue';
                case 'B':
                    return 'red';
                default:
                    return '';
            }
        }
    });
