#!/usr/bin/env node
import fetchJSON from './utils/fetchJSON.js'

const args = process.argv.slice(2)
const username = args[0]

if (args.length !== 1) {
	console.error('Usage: github-activity <username>')
	process.exit(1)
}

// Github API Base URL: 'https://api.github.com/'
const userEndpoint = `https://api.github.com/users/${username}/events`

const userData = await fetchJSON(userEndpoint)

console.log('Output:')
// console.log(userData)

class Event {
	constructor(type, repo, action) {
		this.type = type
		this.repo = repo
		this.action = action
	}
}

const userEvents = []

userData.forEach((event) => {
	userEvents.push(new Event(event.type, event.repo.name, event.payload.action))
})

userEvents.forEach((event) => {
	console.log(event)
})
