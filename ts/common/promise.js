System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function create() {
        return new Promise();
    }
    var PromiseFactory, promiseFactory, Promise;
    return {
        setters: [],
        execute: function () {
            PromiseFactory = class PromiseFactory {
                static create() {
                    return new Promise();
                }
            };
            exports_1("PromiseFactory", PromiseFactory);
            promiseFactory = {
                create: create,
            };
            exports_1("default", promiseFactory);
            Promise = class Promise {
                constructor() {
                    this.data = null;
                    this.error = null;
                    this.catch = null;
                    this.onError = null;
                    this.onSuccess = null;
                }
                then(callback) {
                    this.onSuccess = callback;
                    this.processCallback.call(this);
                    return this;
                }
                resolve(callback) {
                    this.data = callback;
                    this.processCallback.call(this);
                    return this;
                }
                reject(error) {
                    this.error = error;
                    this.processCallback.call(this);
                    return this;
                }
                catchError(error) {
                    this.onError = error;
                    this.processCallback.call(this);
                    return this;
                }
                processCallback() {
                    if (this.error && this.onError) {
                        this.onError(this.error);
                    }
                    if (this.data && this.onSuccess) {
                        this.onSuccess(this.data);
                    }
                }
            };
        }
    };
});
