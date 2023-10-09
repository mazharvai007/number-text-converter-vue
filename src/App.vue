<script>
export default {
	data() {
		return {
			numbers: {
				decimal: 0,
				binary: 0,
				octal: 0,
				hexadecimal: 0,
			},
			lines: {
				text: '',
				binary: '',
			},
			invalidNumber: false,
			invalidLine: false,
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
		resetNumbers() {
			this.numbers = {
				decimal: 0,
				binary: 0,
				octal: 0,
				hexadecimal: 0,
			};
			this.invalidNumber = false;
		},
		textToBinary(text) {
			const charCodeArr = [];
			for (let i in text) {
				charCodeArr.push(text.charCodeAt(i));
			}

			const binaryArr = charCodeArr.map((char) => {
				return char.toString(2);
			});

			return binaryArr;
		},
		binaryToText(codeArray) {
			let text = '';
			for (let code of codeArray) {
				const char = String.fromCharCode(parseInt(code, 2));
				text = text.concat(char);
			}
			return text;
		},
		resetText() {
			this.lines = {
				text: '',
				binary: '',
			};
			this.invalidLine = false;
		},
	},
	watch: {
		'numbers.decimal': function (value) {
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
		'lines.text': function (value) {
			if (value.length === 0) {
				this.lines.binary = 0;
			} else {
				const codeArray = this.textToBinary(value);
				this.lines.binary = codeArray.join(' ');
			}
		},
		'lines.binary': function (value) {
			if (value.length === 0) {
				this.lines.text = '';
			} else {
				const codeArray = value.split(' ');
				const text = this.binaryToText(codeArray);

				this.lines.text = text;
			}
		},
	},
};
</script>

<template>
	<div class="container">
		<!-- Header Section -->
		<header id="header">
			<h1>Number and Text Converter</h1>
		</header>
		<!-- Main Content Section -->
		<main id="main">
			<!-- Number System Section -->
			<section class="boxWrapper">
				<h2>Number System Conversion</h2>
				<div class="box">
					<div class="input-group">
						<label>Decimal</label>
						<input
							type="text"
							aria-label="decimal"
							v-model="numbers.decimal"
						/>
					</div>
					<div class="input-group">
						<label>Binary</label>
						<input
							type="text"
							aria-label="binary"
							v-model="numbers.binary"
						/>
					</div>
					<div class="input-group">
						<label>Octal</label>
						<input
							type="text"
							aria-label="octal"
							v-model="numbers.octal"
						/>
					</div>
					<div class="input-group">
						<label>Hexadecimal</label>
						<input
							type="text"
							aria-label="hexadecimal"
							v-model="numbers.hexadecimal"
						/>
					</div>
					<div class="reset-btn">
						<p v-if="invalidNumber">Invalid Number</p>
						<button @click="resetNumbers">Reset</button>
					</div>
				</div>
			</section>
			<!-- Text Conversion Section -->
			<section class="boxWrapper">
				<h2>Text Conversion</h2>
				<div class="box">
					<div class="input-group">
						<label for="hexadecimal">Enter Your Text Below</label>
						<textarea
							name="text-field"
							id=""
							cols="30"
							rows="10"
							v-model="lines.text"
						></textarea>
					</div>
					<div class="input-group">
						<label for="hexadecimal">Enter Your Binary Below</label>
						<textarea
							name="binary-field"
							id=""
							cols="30"
							rows="10"
							v-model="lines.binary"
						></textarea>
					</div>
					<div class="reset-btn">
						<p v-if="invalidLine">Invalid Text</p>
						<button @click="resetText">Reset</button>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<!-- <style scoped></style> -->
