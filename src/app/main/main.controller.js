'use strict';

angular.module('inspinia')
  .controller('MainController', function () {

    var vm = this;

    vm.userName = 'Julia Dizhak';
    vm.helloText = 'Welcome in Angular Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

    // data
    vm.dataToday = Date.now();

    vm.income = 1002323;
    vm.taxRate = 0.13;

    vm.changeAmount = function () {
      vm.income = Math.random()*100000;
    }

    // draw plot
    vm.pieDataset = [ [[0, 0], [1, 1]], [[0, 0], [2, 1], [3, 2], [2, 4]] ];
    vm.pieOptions = { yaxis: { max: 4 } };

    vm.progress = 48;

  });
