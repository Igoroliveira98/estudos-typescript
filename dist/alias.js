"use strict";
// The union (|) indicate for a params which can receive two types:
function logDetails(foo, bar) {
    console.log("A product with id " + foo + " of the product " + bar + " does not exist!!");
}
logDetails(5, "shoes");
logDetails("5", "shoes");
function logInfo(foo, bar) {
    console.log("A product with id " + foo + " of the product " + bar + " does not exist!!");
}
logInfo(123, "shirt");
logInfo("123", "shirt");
function platformRender(platform) {
    return platform;
}
;
platformRender("Linux");
