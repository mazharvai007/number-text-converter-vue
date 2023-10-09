import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// export default createApp(App).mount('#app');

export default createApp(App, {
	data() {
		return {
			numbers: {
				decimal: 100,
				binary: 0,
				octal: 0,
				hexadecimal: 0,
			},
		};
	},
	methods: {
		isBinary(text) {
			for (let txt of text) {
				if (txt !== '0' && txt !== '1') return false;
			}
			return true;
		},

		isOctal(text) {
			for (let txt of text) {
				if (txt < '0' || txt > '7') return false;
			}
			return true;
		},
		isHex(text) {
			for (let txt of text) {
				if (
					(txt < '0' || txt > '9') &&
					(txt < 'A' || txt > 'F') &&
					(txt < 'a' || txt > 'f')
				) {
					return false;
				}
			}
			return true;
		},
	},
	watch: {
		'numbers.decimal': function (value) {
			console.log(value);
			this.numbers.decimal = parseInt(value) || 0;
			this.numbers.binary = value.toString(2);
			this.numbers.octal = value.toString(8);
			this.numbers.hexadecimal = value.toString(16);
		},

		'numbers.binary': function (value) {
			let decimal = parseInt(value, 2);

			if (!this.isBinary(value)) {
				this.invalidNumber = true;
			} else {
				this.invalidNumber = false;
			}

			this.numbers.decimal = decimal;
			this.numbers.binary = value || 0;
			this.numbers.octal = decimal.toString(8);
			this.numbers.hexadecimal = decimal.toString(16);
		},
		'numbers.octal': function (value) {
			let decimal = parseInt(`0${value}`, 8) || 0;

			if (!this.isOctal(value)) {
				this.invalidNumber = true;
			} else {
				this.invalidNumber = false;
			}

			this.numbers.decimal = decimal;
			this.numbers.binary = decimal.toString(2) || 0;
			this.numbers.octal = value || 0;
			this.numbers.hexadecimal = decimal.toString(16);
		},
		'numbers.hexadecimal': function (value) {
			let decimal = parseInt(`0x${value}`, 16) || 0;

			if (!this.isHex(value)) {
				this.invalidNumber = true;
			} else {
				this.invalidNumber = false;
			}

			this.numbers.decimal = decimal;
			this.numbers.binary = decimal.toString(2) || 0;
			this.numbers.octal = decimal.toString(8) || 0;
			this.numbers.hexadecimal = value || 0;
		},
	},
}).mount('#app');

// const app = createApp(App, {
// 	data() {
// 		return {
// 			numbers: {
// 				decimal: 100,
// 				binary: 0,
// 				octal: 0,
// 				hexadecimal: 0,
// 			},
// 		};
// 	},
// });
// app.mount('#app');

// export default app;
