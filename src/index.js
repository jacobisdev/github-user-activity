#!/usr/bin/env node
import { Event } from './constants.js'
import { fetchJSON, getEventMessage } from './utils.js'

const args = process.argv.slice(2)
const username = args[0]

if (args.length !== 1) {
	console.error('Usage: github-activity <username>')
	process.exit(1)
}

// Github API Base URL: 'https://api.github.com/'
const userEndpoint = `https://api.github.com/users/${username}/events`

const userData = await fetchJSON(userEndpoint)

if (userData.length === 0) {
	console.log('The user has no recent events')
	process.exit(1)
}

const userEvents = []

userData.forEach((event) => {
	userEvents.push(
		new Event(
			event.type,
			event.repo.name,
			event.payload.action,
			event.payload.ref_type,
		),
	)
})

const groupedEvents = {}

userEvents.forEach((event) => {
	const key = `${event.type}|${event.repo}|${event.action ?? ''}|${event.ref_type ?? ''}`

	groupedEvents[key] = (groupedEvents[key] || 0) + 1
})

console.log('Output:')

for (const key in groupedEvents) {
	const splittedKey = key.split('|')

	const event = splittedKey[0]
	const repo = splittedKey[1]
	const action = splittedKey[2]
	const ref_type = splittedKey[3]

	const count = groupedEvents[key]

	const message = `~ ${getEventMessage(count, event, repo, action, ref_type)}`
	console.log(message)
}
