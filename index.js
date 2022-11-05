/**
 * INFLUXED Alerts
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linus, and Windows
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Jordon <https://github.com/influxion/>
 */
import chalk from 'chalk';
import sym from 'log-symbols';
const greenI = chalk.green.inverse;
const green = chalk.green;
const blueI = chalk.blue.inverse;
const blue = chalk.blue;
const redI = chalk.red.bold.inverse;
const red = chalk.red;
const yellowI = chalk.hex('#FFA500').inverse;
const yellow = chalk.hex('#FFA500');

export default options => {
	const defaultOptions = {
		type: `error`,
		name: ``,
		msg: `You forgot to define all options.`
	};
	const opts = {...defaultOptions, ...options};
	const {type, name, msg} = opts;

	const printName = name ? name : type.toUpperCase();

	switch (type) {
		case `success`:
			console.log(`\n${sym.success}  ${greenI(` ${printName} `)} ${green(msg)}\n`);
			break;
		case `error`:
			console.log(`\n${sym.error}  ${redI(` ${printName} `)} ${red(msg)}\n`);
			break;
		case `info`:
			console.log(`\n${sym.info}  ${blueI(` ${printName} `)} ${blue(msg)}\n`);
			break;
		case `warning`:
			console.log(`\n${sym.warning}  ${yellowI(` ${printName} `)} ${yellow(msg)}\n`);
			break;
		default:
			console.log(`\n${red(`Invalid type (No such type found)`)}\n`);
			break;
	}
};
