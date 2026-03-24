import { capitalize } from './helpers.js'

export class Event {
	constructor(type, repo, action, ref_type) {
		this.type = type
		this.repo = repo
		this.action = action
		this.ref_type = ref_type
	}
}

export const eventMessages = {
	PushEvent: (count, repo) => {
		switch (count) {
			case 1:
				return `Pushed 1 commit to ${repo}`
			default:
				return `Pushed ${count} commits to ${repo}`
		}
	},
	CreateEvent: (count, repo, ref_type) => {
		switch (count) {
			case 1:
				return `Created 1 ${ref_type} in ${repo}`
			default:
				return `Created ${count} ${ref_type}s in ${repo}`
		}
	},
	DeleteEvent: (count, repo, ref_type) => {
		switch (count) {
			case 1:
				return `Deleted 1 ${ref_type} in ${repo}`
			default:
				return `Deleted ${count} ${ref_type}s in ${repo}`
		}
	},
	IssuesEvent: (count, repo, action) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} 1 issue in ${repo}`
			default:
				return `${capitalize(action)} ${count} issues in ${repo}`
		}
	},
	PullRequestEvent: (count, repo, action) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} 1 pull request in ${repo}`
			default:
				return `${capitalize(action)} ${count} pull requests in ${repo}`
		}
	},
	IssueCommentEvent: (count, repo, action) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} 1 issue comment in ${repo}`
			default:
				return `${capitalize(action)} ${count} issue comments in ${repo}`
		}
	},
	WatchEvent: (count, repo, action) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} watching ${repo}`
			default:
				return `${capitalize(action)} watching ${repo} ${count} times`
		}
	},
	ForkEvent: (count, repo) => {
		switch (count) {
			case 1:
				return `Forked ${repo} 1 time`
			default:
				return `Forked ${repo} ${count} times`
		}
	},
	ReleaseEvent: (count, repo, action) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} 1 release in ${repo}`
			default:
				return `${capitalize(action)} ${count} releases in ${repo}`
		}
	},
}
