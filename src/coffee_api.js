class CoffeeApi {
	constructor() {
		this.api = "https://coffee.alexflipnote.dev"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
		}
	}

	async getRandomImage() {
		const response = await fetch(
			`${this.api}/random.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
 }

module.exports = {CoffeeApi}
