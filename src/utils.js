export const fetchJSON = async (url) => {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			let message = ''
			switch (response.status) {
				case 404:
					message = `The user does not exist`
					break
				case 403:
					message = 'The server is not responding'
					break
				default:
					message = `Response status: ${response.status}`
					break
			}
			throw new Error(message)
		}
		return await response.json()
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}
