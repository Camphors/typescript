// 函数类型
//  函数类型包含：参数类型和返回值类型
let myAdd: (x: number, y: number) => number = function(x: number, y: number):number { return x + y };

// 也可以写成以下  只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
let myAddDup: (baseValue: number, increment: number) => number = function(x: number, y: number):number { return x + y };


// 推断类型
let add = function(x: number, y: number): number { return x + y };
let addDup: (baseValue: number, increment: number) => number = function(x, y) { return x + y };
// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。


// 可选参数和默认参数
// 如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值
function buildName(firstName = 'Will', lastName: string) {
	return `${firstName}   ${lastName}`
}

// let result1 = buildName('Bob'); // error, toot few parameters
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // error too many parameters
let result3 = buildName('Bob', 'Adams'); // Bob Adams
let result4 = buildName(undefined, 'Adams');  // 'Will Adams'

// 剩余参数
function RestParams(firstName: string, ...restOfName:string[]) {
	return firstName + ' ' + restOfName.join(' ')
}

let Names = RestParams('Joseph', 'Samuel', 'Lucas', 'MacKinzie');

// 也可在带有剩余参数的函数类型定义上使用
let buildNameFunc: (fname: string, ...rest:string []) => string = RestParams;


// this参数
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


// 重载
console.log('-------------重载------------');
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x: { suit: string; card: number } []): number;
function pickCard(x: number): {suit: string; card: number};
function pickCard(x): any { // 并不是重载列表的一部分
	if(typeof x == 'object') {
		let pickedCard = Math.floor(Math.random() * x.length);
		console.log('pickedCard:' + pickedCard);
		return pickedCard
	} else if(typeof x == 'number') {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}

let myDeck = [{ suit: 'diamonds', card: 2 }, { suit: 'spades', card: 10 }, { suit: 'hearts', card: 4 }];1
console.log(pickCard(myDeck));
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(`card: ${pickedCard1.card} of  ${pickedCard1.suit}`);
let pickedCard2 = pickCard(15);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);