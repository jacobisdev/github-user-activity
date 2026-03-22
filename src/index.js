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



const eventTypes = [
	{
		type: 'CommitCommentEvent',
		count: 0,
		message: '',
	},
	{
		type: 'CreateEvent',
		count: 0,
		message: '',
	},
	{
		type: 'DeleteEvent',
		count: 0,
		message: '',
	},
	{
		type: 'DiscussionEvent',
		count: 0,
		message: '',
	},
	{
		type: 'ForkEvent',
		count: 0,
		message: 'Forked ? (user/repo)',
	},
	{
		type: 'GollumEvent',
		count: 0,
		message: '',
	},
	{
		type: 'IssueCommentEvent',
		count: 0,
		message: '',
	},
	{
		type: 'IssuesEvent',
		count: 0,
		message: 'Opened a new issue in ? (user/repo)',
	},
	{
		type: 'MemberEvent',
		count: 0,
		message: '',
	}, // Starred user/repo
	{
		type: 'PublicEvent',
		count: 0,
		message: '',
	},
	{
		type: 'PullRequestEvent',
		count: 0,
		message: '',
	},
	{
		type: 'PullRequestReviewEvent',
		count: 0,
		message: '',
	},
	{
		type: 'PullRequestReviewCommentEvent',
		count: 0,
		message: '',
	},
	{
		type: 'PushEvent',
		count: 0,
		message: 'Pushed ? commit/s to ? (user/repo)',
	},
	{
		type: 'ReleaseEvent',
		count: 0,
		message: '',
	},
	{
		type: 'WatchEvent',
		count: 0,
		message: '',
	},
]

userData.forEach((element) => {
	eventTypes.forEach((event) => {
		if (element.type === event.type) {
			event.count++
		}
	})
})

for (const event in eventTypes) {
	console.log(eventTypes[event].type, eventTypes[event].count)
}

// console.log(eventTypes)
// console.log('Output:')
