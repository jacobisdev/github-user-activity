# GitHub User Activity CLI

A command-line interface (CLI) application built with Node.js to fetch and display the recent public activity of any GitHub user. 

This project was built as part of the backend developer track on [roadmap.sh](https://roadmap.sh/).

## Features

- Fetches real-time event data from the public GitHub API.
- Aggregates and groups similar events for a cleaner terminal output.
- Supports formatting for multiple GitHub event types, including:
  - PushEvents (Commits)
  - Create/Delete Events (Repositories, branches, etc.)
  - Issues and Pull Request Events
  - Watch and Fork Events
- Handles HTTP errors gracefully (e.g., 404 for non-existent users, 403 for API rate limits).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jacobisdev/github-user-activity.git
    cd github-user-activity
    ```

2. Link the package globally so you can use the CLI command from anywhere:

    ```bash
    npm link
    ```


### Uninstallation

You can uninstall the package with the following command:

```bash
npm remove -g github-user-activity
```

You

## Usage
Once installed and linked, you can run the CLI tool using the github-activity command followed by a valid GitHub username.

```bash
github-activity <username>

# Alternatively, if you didn't link it
node src/index.js jacobisdev
```

### Example

```bash
github-activity jacobisdev
```

### Expected Output:

```bash
Output:
~ Pushed 4 commits to jacobisdev/github-user-activity
~ Starred Raphire/Win11Debloat
~ Created a branch in jacobisdev/github-user-activity
```

## Tech Stack & Tooling
- Language: JavaScript (ES Modules)
- Runtime: [Node.js](https://nodejs.org/)
- Network: Native Fetch API
- Linting & Formatting: [Biome](https://biomejs.dev/)

## Development Commands
If you want to contribute or modify the code, the following scripts are available:

```bash
# First you have to install Biome.
npm install

# Format the code using Biome.
npm run format

# Lint the code using Biome.
npm run lint

# Run both formatter and linter checks.
npm run check
```