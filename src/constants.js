export class Event {
	constructor(type, repo, action, ref_type) {
		this.type = type
		this.repo = repo
		this.action = action
		this.ref_type = ref_type
	}
}
