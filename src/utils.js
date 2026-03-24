import { getErrorMessage } from './helpers.js'

export const fetchJSON = async (url) => {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(getErrorMessage(response.status))
		}
		return await response.json()
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}
