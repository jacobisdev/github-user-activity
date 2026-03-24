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
	CommitCommentEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a commit comment in ${repo}`
			default:
				return `${capitalize(action)} ${count} commit comments in ${repo}`
		}
	},
	CreateEvent: (repo, ref_type, count) => {
		switch (count) {
			case 1:
				return `Created a ${ref_type} in ${repo}`
			default:
				return `Created ${count} ${ref_type}s in ${repo}`
		}
	},
	DeleteEvent: (repo, ref_type, count) => {
		switch (count) {
			case 1:
				return `Deleted a ${ref_type} in ${repo}`
			default:
				return `Deleted ${count} ${ref_type}s in ${repo}`
		}
	},
	DiscussionEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a discussion in ${repo}`
			default:
				return `${capitalize(action)} ${count} discussions in ${repo}`
		}
	},
	ForkEvent: (repo, count) => {
		switch (count) {
			case 1:
				return `Forked ${repo}`
			default:
				return `Forked ${repo} ${count} times`
		}
	},
	GollumEvent: (repo) => {
		return `Created or edited a wiki in${repo}`
	},
	IssueCommentEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} an issue comment in ${repo}`
			default:
				return `${capitalize(action)} ${count} issue comments in ${repo}`
		}
	},
	IssuesEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} an issue in ${repo}`
			default:
				return `${capitalize(action)} ${count} issues in ${repo}`
		}
	},
	MemberEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a member in ${repo}`
			default:
				return `${capitalize(action)} ${count} members in ${repo}`
		}
	},
	PublicEvent: (repo) => {
		return `Made public ${repo}`
	},
	PullRequestEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a pull request in ${repo}`
			default:
				return `${capitalize(action)} ${count} pull requests in ${repo}`
		}
	},
	PullRequestReviewEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a pull request review in ${repo}`
			default:
				return `${capitalize(action)} ${count} pull request reviews in ${repo}`
		}
	},
	PullRequestReviewCommentEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a pull request review comment in ${repo}`
			default:
				return `${capitalize(action)} ${count} pull request review comments in ${repo}`
		}
	},
	PushEvent: (repo, count) => {
		switch (count) {
			case 1:
				return `Pushed a commit to ${repo}`
			default:
				return `Pushed ${count} commits to ${repo}`
		}
	},
	ReleaseEvent: (repo, action, count) => {
		switch (count) {
			case 1:
				return `${capitalize(action)} a release in ${repo}`
			default:
				return `${capitalize(action)} ${count} releases in ${repo}`
		}
	},
	WatchEvent: (repo) => {
		return `Starred ${repo}`
	},
}
