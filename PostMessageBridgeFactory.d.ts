import { NgZone } from '@angular/core';
import { IPostMessageBridge } from "./IPostMessageBridge";
export declare class PostMessageBridgeFactory {
    private ngZone;
    constructor(ngZone: NgZone);
    makeInstance(): IPostMessageBridge;
}
