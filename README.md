# coffee_api.js
Web-API for [coffee.alexflipnote.dev](https://coffee.alexflipnote.dev) website which is an API that provides random coffee images

## Example
```JavaScript
async function main() {
	const { CoffeeApi } = require("./coffee_api.js")
	const coffeeApi = new CoffeeApi()
	const randomImage = await coffeeApi.getRandomImage()
	console.log(randomImage)
}

main()
```
