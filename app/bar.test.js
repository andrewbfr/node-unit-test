const assert = require('assert');


describe('files to be tested', () => {
	context('first function to be tested', () => {
		before(()=>{
			console.log('--before--');
		});
		after(()=>{
			console.log('--after--');
		});
		beforeEach(()=>{
			console.log('--beforeEach--');
		});
		afterEach(()=>{
			console.log('--afterEach--');
		});
		it('should do something', () => {
			assert.equal(50,50);
			console.log(`Env= ${process.env.NODE_ENV}`);
			if (process.env.NODE_ENV == 'development'){
				console.log('DEVELOPMENT MODE BRAH confirmed with conditional check');
				console.log('YOU CAN SET variables here, and make some development specific tests');
			}
		});

		it('should do something else', () => {
			assert.deepEqual({name:'toast'},{name:'toast'});
		});

		it('this is a pending test');
	});

	context('second function', ()=> {
		it('should do something');

	});
})