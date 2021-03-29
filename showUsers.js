const fs = require('fs')

function start() {
	console.log('** Welcome to SHOW USERS version 0.0.1 **');

	fs.readFile('./users.txt', (err, data) => {
		console.log('File is read');
		if( err ) {
			console.log('An error occurred: ' + err.message);
		} else {
			console.log(data.toString());
			// Om det hade varit JSON i filen: använd data.toJSON()
		}
	})

	console.log('Started reading file...');
}

// Falsy: false, null, undefined, 0, ''
// Truthy: alla andra!

module.exports = start;
