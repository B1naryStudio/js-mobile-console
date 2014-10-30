all: min

min:
	uglifyjs ./lib/hypnos.js -o ./lib/hypnos.min.js -m