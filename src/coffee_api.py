from requests import get

class CoffeeAPI:
	def __init__(self) -> None:
		self.api = "https://coffee.alexflipnote.dev/"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
		}


	def get_random_image(self) -> dict:
		return get(
			f"{self.api}/random.json",
			headers=self.headers).json()
