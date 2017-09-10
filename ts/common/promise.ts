export class PromiseFactory {
    public static create() {
        return new Promise();
    }
}
let promiseFactory = {
    create: create
};

export default promiseFactory;
function create() {
    return new Promise();
}
class Promise {
    private data: any = null;
    private onSuccess: any = null;
    private error: any = null;
    private onError: any = null;
    private catch: any = null;
    public then(callback) {
        console.log("then");
        this.onSuccess = callback;
        this.processCallback.call(this);
        return this;
    }

    public resolve(data) {
        console.log("resolve " + data);
        this.data = data;
        this.processCallback.call(this);
        return this;
    }

    public catchError(error) {
        console.log("catchError");
        this.onError = error;
        this.processCallback.call(this);
        return this;
    }

    public reject(error) {
        console.log("reject " + error);
        this.error = error;
        this.processCallback.call(this);
        return this;
    }

    public processCallback() {
        if (this.error && this.onError) {
            this.onError(this.error);
        }

        if (this.data && this.onSuccess) {
            this.onSuccess(this.data);
        }
    }
}