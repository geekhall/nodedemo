　　define(function (){
　　　　var moduleB = function (x,y){
          console.log("In the module B")
　　　　　　return x-y;
　　　　};
　　　　return {
　　　　　　moduleB: moduleB
　　　　};
　　});
