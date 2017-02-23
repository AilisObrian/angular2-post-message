"use strict";
var core_1 = require('@angular/core');
var PostMessageBridgeImpl_1 = require("./PostMessageBridgeImpl");
var PostMessageBridgeFactory_1 = require("./PostMessageBridgeFactory");
var PostMessageModule = (function () {
    function PostMessageModule() {
    }
    PostMessageModule.decorators = [
        { type: core_1.NgModule, args: [{
                    providers: [
                        PostMessageBridgeImpl_1.PostMessageBridgeImpl,
                        PostMessageBridgeFactory_1.PostMessageBridgeFactory
                    ]
                },] },
    ];
    /** @nocollapse */
    PostMessageModule.ctorParameters = function () { return []; };
    return PostMessageModule;
}());
exports.PostMessageModule = PostMessageModule;
//# sourceMappingURL=PostMessageModule.js.map