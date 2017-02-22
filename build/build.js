const path = require('path');
const fs = require('fs');
const cp = require('child_process');

let configPath = path.join(__dirname, '..', 'config', 'config.json');
let configExamplePath = path.join(__dirname, '..', 'config', 'config.json.example');
let config = {
	production: {
		use_env_variable: "DATABASE_URL",
		dialect: "postgres"
	}
};

console.log('Creating config file...')
fs.readFile(configExamplePath, (err, data) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	fs.writeFile(configPath, data, { mode: 0664 }, (err) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		console.log('Creted config file.\n');

		console.log('Running migrations...')
		let npm = cp.spawn('npm', ['run', 'migrate'], { cwd: path.join(__dirname, '..'), stdio: 'inherit'});

		npm.on('error', (err) => {
			console.log('Error running migrations.')
			console.error(err);
			process.exit(1);
		});

		npm.on('exit', (code) => {
			console.log('Successfully ran migrations.')
			process.exit(code);
		})
	})
})

