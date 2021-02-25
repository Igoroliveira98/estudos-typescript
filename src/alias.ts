// The union (|) indicate for a params which can receive two types:

function logDetails(foo: number | string, bar: string) {
    console.log(`A product with id ${foo} of the product ${bar} does not exist!!`)
}

logDetails(5, "shoes");
logDetails("5", "shoes");



// Type alias: did a new var where we can define the types of params of function. 

type Foo = number | string;

function logInfo(foo: Foo, bar: string) {
    console.log(`A product with id ${foo} of the product ${bar} does not exist!!`)
}

logInfo(123, "shirt");
logInfo("123", "shirt");

type Platform = "Windows" | "Linux"; // only can be one of these ones;

function platformRender(platform: Platform) {
    return platform
};

platformRender("Linux")