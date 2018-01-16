angular
  .module('ngSamples')
  .factory('solutionFactory', function($http){
    function getSolutions(){
      return $http.get('data/solutions.json');
    }
    return{
      getSolutions: getSolutions
    }
  })
  
  .factory('blogFactory', function($http){
    function getBlogs(){
      return $http.get('data/blogs.json');
    }
    return{
      getBlogs: getBlogs
    }
  })
  
  .factory('sampleFactory', function($http){
    function getSamples(){
      return $http.get('data/samples.json');
    }
    return{
      getSamples: getSamples
    }
  });
