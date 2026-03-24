export const capitalize = (string) => {
	return string.at(0).toUpperCase() + string.slice(1)
}

export const getErrorMessage = (status) => {
	switch (status) {
		case 404:
			return `The user does not exist`
		case 403:
			return 'The server is not responding'
		default:
			return `Error fetching data: ${status}`
	}
}