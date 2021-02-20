// 函数类型
//  函数类型包含：参数类型和返回值类型
var myAdd = function (x, y) { return x + y; };
// 也可以写成以下  只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
var myAddDup = function (x, y) { return x + y; };
// 推断类型
var add = function (x, y) { return x + y; };
var addDup = function (x, y) { return x + y; };
// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
// 可选参数和默认参数
// 如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Will'; }
    return firstName + "   " + lastName;
}
// let result1 = buildName('Bob'); // error, toot few parameters
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // error too many parameters
var result3 = buildName('Bob', 'Adams'); // Bob Adams
var result4 = buildName(undefined, 'Adams'); // 'Will Adams'
// 剩余参数
function RestParams(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var Names = RestParams('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
// 也可在带有剩余参数的函数类型定义上使用
var buildNameFunc = RestParams;
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// 重载
console.log('-------------重载------------');
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        console.log('pickedCard:' + pickedCard_1);
        return pickedCard_1;
    }
    else if (typeof x == 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: 'diamonds', card: 2 }, { suit: 'spades', card: 10 }, { suit: 'hearts', card: 4 }];
1;
console.log(pickCard(myDeck));
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of  " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
