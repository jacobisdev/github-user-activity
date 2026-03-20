#!/usr/bin/env node
const args = process.argv.slice(2)
const username = args[0]

if (args.length !== 1) {
	console.error('Usage: github-activity <username>')
	process.exit(1)
}

// Github API Base URL: 'https://api.github.com/'
const reposEndpoint = `https://api.github.com/users/${username}/events`

const fetchJSON = async (url) => {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error(error.message)
	}
}

const userData = await fetchJSON(reposEndpoint)
console.log(userData)

