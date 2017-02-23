"use strict";
var core_1 = require('@angular/core');
var PostMessageBridgeImpl_1 = require("./PostMessageBridgeImpl");
var PostMessageBridgeFactory = (function () {
    function PostMessageBridgeFactory(ngZone) {
        this.ngZone = ngZone;
    }
    PostMessageBridgeFactory.prototype.makeInstance = function () {
        return new PostMessageBridgeImpl_1.PostMessageBridgeImpl(this.ngZone);
    };
    PostMessageBridgeFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PostMessageBridgeFactory.ctorParameters = function () { return [
        { type: core_1.NgZone, decorators: [{ type: core_1.Inject, args: [core_1.NgZone,] },] },
    ]; };
    return PostMessageBridgeFactory;
}());
exports.PostMessageBridgeFactory = PostMessageBridgeFactory;
//# sourceMappingURL=PostMessageBridgeFactory.js.map