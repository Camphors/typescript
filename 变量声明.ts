// let const
for (var i = 0; i < 10; i++) {
	(function (i) {
		console.log(i)
		// setTimeout(function () { console.log(i)}, 100 *i)
	})(i)
}

function theCityThatAlwaysSleeps() {
	let getCity;
	if (true) {
		let city = 'Seattle'；
		getCity = function () {
			return city
		}
	}
	return getCity()
}

//解构

let o = {
	a: 'foo',
	b: 12,
	c: 'bar'
};

type C = { a: string, b?: number }
function f({ a, b }: C):void {
	// do
}

