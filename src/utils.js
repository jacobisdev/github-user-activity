import { eventMessages } from './constants.js'
import { getErrorMessage } from './helpers.js'

// Fetch data from GitHub API
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

// Get the message for each specific event
export const getEventMessage = (event, repo, action, ref_type, count) => {
	let message = ''
	if (action) {
		message = eventMessages[event](repo, action, count)
	} else if (ref_type) {
		message = eventMessages[event](repo, ref_type, count)
	} else {
		message = eventMessages[event](repo, count)
	}
	return message
}
