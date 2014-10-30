all: min

min:
	uglifyjs ./mobile-console.js -o ./mobile-console.min.js -m