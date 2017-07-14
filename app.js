/**
 * Created by Aditya on 13-Jul-17.
 */
(function() {
    var app = angular.module("FOODSTORE", []);
    var item = {
        name: "chinese noodles",
        quantity: "500gm",
        cost: 230,
        image: "img/nood.jpg",
        isSoldOut: false,
        activeTab:"discription"
    };
    var item1 = {
        name: "strabery",
        quantity: "50gm",
        cost: 900,
        image: "img/icrm.png",
        isSoldOut: false,
        activeTab:"discription"
    };
    var item2 = {
        name: "samosa",
        quantity: "120gm",
        cost: 190,
        image: "img/samosa.jpg",
        isSoldOut: false,
        activeTab:"discription"
    };
    app.controller("StoreController", function () {
        this.foods = [item, item1,item2];

        this.setActiveTab=function(food,tab){
            food.activeTab=tab;
        }

    })
})()