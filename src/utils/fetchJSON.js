export default async (url) => {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			if (response.status === 404) {
				throw new Error(`User doesn't exists`)
			}
			throw new Error(`Response status: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}
