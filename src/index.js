#!/usr/bin/env node
const args = process.argv.slice(2)
const username = args[0]

if (args.length !== 1) {
	console.error('Usage: github-activity <username>')
	process.exit(1)
}

const githubApiUrl = 'https://api.github.com/'

const reposEndpoint = `${githubApiUrl}/repos/${username}/events`
