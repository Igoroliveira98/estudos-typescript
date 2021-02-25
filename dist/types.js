"use strict";
// Boolean : it only return two values: true or false;
var isOpen;
isOpen = true; // false
// string : can represented of three ways ('foo', "bar", `foo`);
var message;
message = 'foo';
// number : work for int, float, hexadecimal...
var total;
total = 5.3;
// Array: 
var items;
items = [1, 2, 3];
var totaly; // Generic notation
totaly = ["foo", "bar"];
// Tuple : the tuple is one array where we already know the number of elements into it and the your type
var title;
title = [5, "foo", "bar", true];
// enum : It is a enumerator that be used to build one element with properties and methods
var Colors;
(function (Colors) {
    Colors["white"] = "#FFFFFF";
    Colors["black"] = "#000000";
})(Colors || (Colors = {}));
;
// any : 
var stuff;
stuff = [];
// void : It does not return anything;
function logger() {
    console.log("foo");
}
// object
var car;
car = {
    color: "white",
    brand: "BMW",
    year: "2018"
};
