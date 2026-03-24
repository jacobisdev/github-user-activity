import { eventMessages } from './constants.js'
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

export const getEventMessage = (count, event, repo, action, ref_type) => {
	let message = ''
	if (action) {
		message = eventMessages[event](count, repo, action)
	} else if (ref_type) {
		message = eventMessages[event](count, repo, ref_type)
	} else {
		message = eventMessages[event](count, repo)
	}
	return message
}
