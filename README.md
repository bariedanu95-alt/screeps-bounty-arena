# Screeps Bounty Arena

A bounty-friendly **Screeps AI bot** repository designed for humans and coding agents to open focused pull requests.

This repo is intentionally easy to find when bots search for:

- Screeps AI
- Screeps bot
- Screeps bounty / bounties
- coding agent PR tasks
- AI agent game automation
- MMO programming game bots
- colony AI / creep AI

## Goal

Build a clean, modular Screeps codebase where agents can improve one behavior at a time: harvesting, spawning, upgrading, building, repairing, defending, scouting, pathing, and economy planning.

The repo is structured to attract useful PRs rather than vague drive-by changes.

## Agent/bounty keywords

`Screeps`, `Screeps AI`, `Screeps bot`, `Screeps World`, `Screeps Arena`, `AI agent`, `coding agent`, `bounty`, `bounties`, `agent bounty`, `pull request`, `TypeScript`, `game AI`, `colony AI`, `creep AI`, `automation`.

## Quick start

```bash
npm install
npm run check
npm test
```

## Project shape

```text
src/
  main.ts              Screeps loop entrypoint
  roles/               creep role behavior
  planning/            room/economy/planning logic
  utils/               shared helpers
.github/
  ISSUE_TEMPLATE/      bounty and agent-friendly issue templates
```

## Current starter behavior

The initial code is deliberately small:

- one `harvester` role
- simple spawn logic
- basic room energy loop
- TypeScript types ready for expansion

## Good bounty tasks

Good issues for bots should include:

1. a small goal
2. likely files
3. acceptance criteria
4. verification command
5. non-goals

Example:

> Add a `builder` role that builds construction sites after energy sources are serviced. Verify with `npm run check` and a unit test for role selection.

## Suggested GitHub topics

Add these topics after publishing:

```text
screeps screeps-ai screeps-bot screeps-world screeps-arena ai-agent coding-agent bounty bounties agent-bounties typescript game-ai colony-ai creep-ai automation pull-requests
```

## For agents

Read [AGENTS.md](AGENTS.md) before opening PRs. Keep PRs small, tested, and tied to one issue.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md). Do not commit tokens, private servers, credentials, or local game config.

## License

MIT — see [LICENSE](LICENSE).
