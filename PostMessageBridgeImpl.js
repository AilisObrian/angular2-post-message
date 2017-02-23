"use strict";
var core_1 = require('@angular/core');
var post_message_bus_1 = require('@angular/platform-webworker/src/web_workers/shared/post_message_bus');
var index_1 = require('ts-smart-logger/index');
var PostMessageBridgeImpl = (function () {
    function PostMessageBridgeImpl(ngZone) {
        this.ngZone = ngZone;
        this._sources = new Map();
        this._targets = new Map();
        this.loggingEnable = true;
    }
    /**
     * @override
     */
    PostMessageBridgeImpl.prototype.connect = function (source, target, targetOrigin) {
        var _this = this;
        targetOrigin = targetOrigin || "*";
        this.busSource = new post_message_bus_1.PostMessageBusSource(source);
        this.busSource.attachToZone(this.ngZone);
        this.busSink = new post_message_bus_1.PostMessageBusSink({
            postMessage: function (messages) {
                if (source !== target) {
                    target.postMessage(messages, targetOrigin);
                    if (_this.loggingEnable) {
                        PostMessageBridgeImpl.logger.debug("[$PostMessageBridgeImpl] The messages", messages, "were sent from the source", source, "to the target", target);
                    }
                }
                else {
                    if (_this.loggingEnable) {
                        PostMessageBridgeImpl.logger.warn("[$PostMessageBridgeImpl] It's impossible to send the messages ", messages, " because the source and the target are equal! The source is", source);
                    }
                }
            }
        });
        this.busSink.attachToZone(this.ngZone);
        if (this.loggingEnable) {
            PostMessageBridgeImpl.logger.debug("[$PostMessageBridgeImpl] The bridge service was successfully initiated for the target origin '" + targetOrigin + "'.");
        }
        return this;
    };
    /**
     * @override
     */
    PostMessageBridgeImpl.prototype.makeBridge = function (bridgeName) {
        this.busSource.initChannel(bridgeName, true);
        this._sources.set(bridgeName, this.busSource.from(bridgeName));
        this.busSink.initChannel(bridgeName, true);
        this._targets.set(bridgeName, this.busSink.to(bridgeName));
        if (this.loggingEnable) {
            PostMessageBridgeImpl.logger.debug("[$PostMessageBridgeImpl] The bridge '" + bridgeName + "' was successfully registered.");
        }
        return this;
    };
    /**
     * @override
     */
    PostMessageBridgeImpl.prototype.sendMessage = function (bridgeName, message) {
        this._targets.get(bridgeName).emit(message);
        return this;
    };
    /**
     * @override
     */
    PostMessageBridgeImpl.prototype.addListener = function (bridgeName, listener) {
        this._sources.get(bridgeName).subscribe(listener);
        return this;
    };
    /**
     * @override
     */
    PostMessageBridgeImpl.prototype.setEnableLogging = function (enabled) {
        this.loggingEnable = enabled;
        return this;
    };
    PostMessageBridgeImpl.logger = index_1.LoggerFactory.makeLogger(PostMessageBridgeImpl);
    PostMessageBridgeImpl.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PostMessageBridgeImpl.ctorParameters = function () { return [
        { type: core_1.NgZone, decorators: [{ type: core_1.Inject, args: [core_1.NgZone,] },] },
    ]; };
    return PostMessageBridgeImpl;
}());
exports.PostMessageBridgeImpl = PostMessageBridgeImpl;
//# sourceMappingURL=PostMessageBridgeImpl.js.map