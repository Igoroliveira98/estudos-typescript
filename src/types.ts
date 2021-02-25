// Boolean : it only return two values: true or false;

let isOpen: boolean;
isOpen = true // false

// string : can represented of three ways ('foo', "bar", `foo`);

let message: string;
message = 'foo'

// number : work for int, float, hexadecimal...

let total: number;
total = 5.3

// Array: 

let items: number[];
items = [1,2,3];

let totaly: Array<string>; // Generic notation
totaly = ["foo", "bar"];

// Tuple : the tuple is one array where we already know the number of elements into it and the your type

let title: [number, string, string, boolean];
title = [5, "foo", "bar", true];

// enum : It is a enumerator that be used to build one element with properties and methods

enum Colors {
    white = "#FFFFFF",
    black = "#000000"
};

// any : 

let stuff: any;
stuff = [];

// void : It does not return anything;

function logger(): void {
        console.log("foo");
}

// object

let car: object;
car = {
    color: "white",
    brand: "BMW",
    year: "2018"
}