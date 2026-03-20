#!/usr/bin/env node
import fetchJSON from "./utils/fetchJSON"

const args = process.argv.slice(2)
const username = args[0]

if (args.length !== 1) {
	console.error('Usage: github-activity <username>')
	process.exit(1)
}

// Github API Base URL: 'https://api.github.com/'
const userEndpoint = `https://api.github.com/users/${username}/events`

const userData = await fetchJSON(userEndpoint)
console.log(userData)