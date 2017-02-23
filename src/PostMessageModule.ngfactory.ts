/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './PostMessageModule';
import * as import2 from './PostMessageBridgeImpl';
import * as import3 from './PostMessageBridgeFactory';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/zone/ng_zone';
class PostMessageModuleInjector extends import0.NgModuleInjector<import1.PostMessageModule> {
  _PostMessageModule_0:import1.PostMessageModule;
  __PostMessageBridgeImpl_1:import2.PostMessageBridgeImpl;
  __PostMessageBridgeFactory_2:import3.PostMessageBridgeFactory;
  constructor(parent:import4.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _PostMessageBridgeImpl_1():import2.PostMessageBridgeImpl {
    if ((this.__PostMessageBridgeImpl_1 == null)) { (this.__PostMessageBridgeImpl_1 = new import2.PostMessageBridgeImpl(this.parent.get(import5.NgZone))); }
    return this.__PostMessageBridgeImpl_1;
  }
  get _PostMessageBridgeFactory_2():import3.PostMessageBridgeFactory {
    if ((this.__PostMessageBridgeFactory_2 == null)) { (this.__PostMessageBridgeFactory_2 = new import3.PostMessageBridgeFactory(this.parent.get(import5.NgZone))); }
    return this.__PostMessageBridgeFactory_2;
  }
  createInternal():import1.PostMessageModule {
    this._PostMessageModule_0 = new import1.PostMessageModule();
    return this._PostMessageModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.PostMessageModule)) { return this._PostMessageModule_0; }
    if ((token === import2.PostMessageBridgeImpl)) { return this._PostMessageBridgeImpl_1; }
    if ((token === import3.PostMessageBridgeFactory)) { return this._PostMessageBridgeFactory_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PostMessageModuleNgFactory:import0.NgModuleFactory<import1.PostMessageModule> = new import0.NgModuleFactory(PostMessageModuleInjector,import1.PostMessageModule);