NPM  = none
NPX = none

ifneq (, $(shell which npm))
	NPM = npm
	NPX = npx
endif

ifneq (, $(shell which pnpm))
	NPM = pnpm
	NPX = pnpx
endif

node_modules:
	$(NPM) install

build: node_modules
	$(NPX) web-ext build

lint: node_modules
	$(NPX) web-ext lint

clean:
	rm -rf web-ext-artifacts node_modules
