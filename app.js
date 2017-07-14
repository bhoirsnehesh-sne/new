var app=angular.module('app',["firebase"]);

app.controller('appCtrl',function($scope,$firebase){


  var ref = new Firebase("https://fir-fbdf6.firebaseio.com/");
        var sync = $firebase(ref);


  $scope.DB = sync.$asArray();

  $scope.message='Registration Form';
  $scope.gender=['Female','Male']


  $scope.app={name:'',gender:'',email:'',passwd:''}


  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={name:'',gender:'',email:'',passwd:''}

  }

  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }



})
