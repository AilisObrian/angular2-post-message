import { NgZone } from '@angular/core';
import { IPostMessageBridge } from './IPostMessageBridge';
import { IPostMessageEventTarget } from './IPostMessageEventTarget';
export declare class PostMessageBridgeImpl implements IPostMessageBridge {
    private ngZone;
    private static logger;
    private busSource;
    private busSink;
    private _sources;
    private _targets;
    private loggingEnable;
    constructor(ngZone: NgZone);
    /**
     * @override
     */
    connect(source: IPostMessageEventTarget, target: IPostMessageEventTarget, targetOrigin?: string): IPostMessageBridge;
    /**
     * @override
     */
    makeBridge(bridgeName: string): IPostMessageBridge;
    /**
     * @override
     */
    sendMessage(bridgeName: string, message?: any): IPostMessageBridge;
    /**
     * @override
     */
    addListener(bridgeName: string, listener: Function): IPostMessageBridge;
    /**
     * @override
     */
    setEnableLogging(enabled: boolean): IPostMessageBridge;
}
