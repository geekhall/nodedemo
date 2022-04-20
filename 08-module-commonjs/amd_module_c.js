　　define(function (){
　　　　var moduleC = function (x,y){
          console.log("In the module C")
　　　　　　return x*y;
　　　　};
　　　　return {
　　　　　　moduleC: moduleC
　　　　};
　　});
