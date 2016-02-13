System.register(['angular2/platform/browser', './components/app/index'], function(exports_1) {
    var browser_1, index_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(index_1.AppComponent);
        }
    }
});
//# sourceMappingURL=index.js.map