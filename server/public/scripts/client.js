let mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', ['$http', function($http){
    let self = this;

    self.showFlag = false;
    self.inputText;
    self.imageData = [];

    self.imageData[0] = {
        name: 'Daughter Paige and Niece Ella',
        role: 'Cousins',
        imageLocation: '/images/Cousins.jpeg'
    };
    self.imageData[1] = {
        name: 'Tucker!',
        role: 'Pet',
        imageLocation: '/images/tucker.jpeg'
    };
    self.imageData[2] = {
        name: 'Wife Ana',
        role: 'Wife',
        imageLocation: '/images/Ana.jpeg'
    };
    self.imageData[3] = {
        name: 'Brother Cody',
        role: 'Brother',
        imageLocation: '/images/Cody.jpeg'
    };
    self.imageData[4] = {
        name: 'Poppa Kent',
        role: 'Uncle',
        imageLocation: '/images/Kent.jpeg'
    };
    self.imageData[5] = {
        name: 'Aunt Nicole',
        role: 'Sister',
        imageLocation: '/images/nicole.jpeg'
    };

    self.toggleShow = function(){
        //custom = $scope.custom === false ? true: false;
        //self.showFlag = false;
        self.showFlag = !self.showFlag;
        console.log(self.showFlag);
    };

    self.pictureClick = function(){
        console.log("picture was clicked!");
    };

    console.log('end of first controller');
}]); // End of random controller

mainApp.controller('showController', ['$http', function($http){
    let self = this;
    self.showFlag = false;

    self.toggleShow = function(){
        //custom = $scope.custom === false ? true: false;
        //self.showFlag = true;
        self.showFlag = !self.showFlag;
        console.log(self.showFlag);
    };

}]); // End of show controller

