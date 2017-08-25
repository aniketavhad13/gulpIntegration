function testInterceptor(){
    return{
        request: function(config){
            if(true){
                config.headers.authorisation = "demo-authorisation for interceptor test";
            }

            return config;
        },

        requestError:function(config){
            return config;
        },

        response: function(res){
            console.log("response header = "+JSON.stringify(res.config.headers.authorisation));
            return res;
        },

        responseError:function(res){
            if(res.status === 401){
                $rootScope.$broadcast('unathorised');
            }
            return res;
        },
    }
}

var module = angular.module('helloWorldApp',[
    'ngRoute'
])

module.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl : "views/home.html",
                controller : "HomeCtrl"
            });
    }
]);

module.factory('testInterceptor',testInterceptor)
    .config(function($httpProvider){
        $httpProvider.interceptors.push("testInterceptor");
    })
    .run(function($http){
        $http.get('js/main.js')
        .then(function(res){
            console.log("request header = "+JSON.stringify(res.config.headers.authorisation));
            this.resHeader = res.config.headers.authorisation;
        });
    });


