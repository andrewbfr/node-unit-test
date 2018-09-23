exports.add = function(a,b) {
    return a + b;
};

exports.addCallback = function (a,b, callback) {
    setTimeout(()=> {
        return callback(null, a + b);
    }, 500);
};

exports.addPromise = function (a,b) {
    // //This is an example of throwing an error, passing an instance of error to a failing test is what mocha asks for, using a non-error datatype such as just the string 'fake' will throw an error from the library itself.
    // return Promise.reject(new Error('fake')) ;
    return Promise.resolve(a+b);
};