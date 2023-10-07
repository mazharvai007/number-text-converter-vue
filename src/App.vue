<script setup></script>

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
						<label for="decimal">Decimal</label>
						<input type="text" value="0" aria-label="decimal" />
					</div>
					<div class="input-group">
						<label for="binary">Binary</label>
						<input type="text" value="0" aria-label="binary" />
					</div>
					<div class="input-group">
						<label for="octal">Octal</label>
						<input type="text" value="0" aria-label="octal" />
					</div>
					<div class="input-group">
						<label for="hexadecimal">Hexadecimal</label>
						<input type="text" value="0" aria-label="hexadecimal" />
					</div>
					<div class="reset-btn">
						<button>Reset</button>
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
						></textarea>
					</div>
					<div class="input-group">
						<label for="hexadecimal">Enter Your Binary Below</label>
						<textarea
							name="binary-field"
							id=""
							cols="30"
							rows="10"
						></textarea>
					</div>
					<div class="reset-btn">
						<button>Reset</button>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<style scoped></style>
