for (var i = 0; i < 10; i++) {
    (function (i) {
        console.log(i);
        // setTimeout(function () { console.log(i)}, 100 *i)
    })(i);
}
