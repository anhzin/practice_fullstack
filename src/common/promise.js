function PromiseFactory() {

}
PromiseFactory.create = function () {
    return new Promise();

    function Promise() {
        this.data = null;
        this.onSuccess = null;
        this.error = null;
        this.onError = null;
        this.resolve = resolve;
        this.then = then;
        this.catch = catchError;
        this.reject = reject;
        return;

        function then(callback) {
            console.log("then");
            this.onSuccess = callback;
            processCallback.call(this);
            return this;
        }

        function resolve(data) {
            console.log("resolve " + data);
            this.data = data;
            processCallback.call(this);
            return this;
        }

        function catchError(error) {
            console.log("catchError");
            this.onError = error;
            processCallback.call(this);
            return this;
        }

        function reject(error) {
            console.log("reject " + error);
            this.error = error;
            processCallback.call(this);
            return this;
        }

        function processCallback() {
            if (this.error && this.onError) {
                this.onError(this.error);
            }

            if (this.data && this.onSuccess) {
                this.onSuccess(this.data);
            }
        }
    }
}