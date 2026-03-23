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
// console.log(userData)

// console.log('Output:')

class Event {
	constructor(type) {
		this.type = type
		this.count = 0
	}

	increment() {
		this.count++
	}
}

const userEvents = [...new Set(userData.map((e) => e.type))]

// userData.forEach((event) => {
// 	if (!userEvents.some((e) => e.type === event.type)) {
// 		userEvents.push(new Event(event.type))
// 		return
// 	}
// 	userEvents.find((e) => e.type === event.type).increment()
// })

// userData.forEach((event) => {
// 	userEvents.push()
// })

console.log(userEvents)

// userEvents.forEach((event) => {
// 	console.log(event.type, event.count)
// })
