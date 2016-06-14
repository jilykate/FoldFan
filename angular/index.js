var myapp = angular.module('myapp', []);

myapp.controller('sectionListController', ['$scope','$element',function sectionListController($scope,$element) {
  $scope.sections = [
    {
      name: 'Section A'
    },
    {
      name: 'Section B'
    },
    {
      name: 'Section C'
    },
    {
      name: 'Section D'
    }
  ];
}])
.directive('hoverable', ['$document',function($document) {
	return{
		link: function(scope, element, attr){
			var $parent = element.parent();

			element.on('mouseenter',function(event){
				if(!$parent.hasClass('open')){
					element.parent().children().removeClass('expand').addClass('shrink');
					element.removeClass('shrink').addClass('expand');
				}
			});
			element.on('mouseleave',function(event){
				if(!$parent.hasClass('open')){
					element.parent().children().removeClass('shrink');
					element.removeClass('expand');
				}
			})

			element.on('click',function(event){
				if(!$parent.hasClass('open')){
					$parent.addClass('open');
					$parent.children().removeClass('active shrink expand').addClass('minify');
					element.removeClass('minify').addClass('active');
				}else{
					$parent.removeClass('open')
					$parent.children().removeClass('active shrink expand minify');
				}
			})
		}
	}
}])