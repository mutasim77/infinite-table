install:
	yarn install

dev:
	yarn dev

server:
	yarn server

# Run both dev and server concurrently
start:
	@make -j2 dev server

build:
	yarn build

lint:
	yarn lint

lint-fix:
	yarn lint:fix

typecheck:
	yarn typecheck

clean:
	yarn clean

preview: build
	yarn preview

rebuild: clean install build

dev-env: install start