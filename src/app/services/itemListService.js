angular.module('rootModule')
    .factory('itemListService', ['$window', ( $window )=>{

        let itemsList = {
            'Alex' : {name: 'Alex', phone: '+375291111111', show: true},
            'Bob' : {name: 'Bob', phone: '+375292222222', show: true},
            'Birdus' : {name: 'Birdus', phone: '+375293333333', show: true},
            'Aleksandr' : {name: 'Aleksandr', phone: '+375294444444', show: true},
            'Arnold' : {name: 'Arnold', phone: '+375295555555', show: true},
            'Sasha' : {name: 'Sasha', phone: '+375296666666', show: true},
            'Mark' : {name: 'Mark', phone: '+375297777777', show: true},
            'Boris' : {name: 'Boris', phone: '+375298888888', show: true},
            'Archi' : {name: 'Archi', phone: '+375299999999', show: true}
        };

        //For developing
        //$window.localStorage.clear();

        if ($window.localStorage['contactList']){
            itemsList = JSON.parse($window.localStorage.getItem('contactList'));
        }

        return {
            addContact : function(newUser, newPhone){
                if(newUser && newPhone && !itemsList[newUser]){
                    itemsList[newUser] = {name : newUser, phone : newPhone, show: true}
                    $window.localStorage.setItem('contactList', JSON.stringify(itemsList));
                    return true;
                }
                return false;
            },

            removeContact : function(key){
                delete itemsList[key];
                $window.localStorage.setItem('contactList', JSON.stringify(itemsList));
            },

            getAll : function(){
                return itemsList;
            },

            objToArray : function(obj){
                let arr = [];
                for(let key in obj){
                    if (obj.hasOwnProperty(key)){
                        arr.push(obj[key]);
                    }
                }
                return arr;
            },
            nameIsValid : function(name){
                return (!!itemsList[name]);
            }

        }
    }])
