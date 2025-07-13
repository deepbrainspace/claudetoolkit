# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an early-stage toolkit project. The repository currently contains primarily configuration and planning files, with the actual implementation to be developed.

## Environment Setup

- Running on WSL - avoid GUI browser operations, use headless browsers when needed
- Use Git hooks (Husky) for automation - never bypass with `HUSKY=0` or similar flags

## Development Commands

Currently no build system is configured. When implemented, follow these preferences:

### Package Management (Future)
- **PREFER**: NX commands first, then pnpm
- **AVOID**: npm commands
- **PREFER**: `nx affected` operations for efficiency

### Git Operations

**Safety Rules:**
- Always ask permission before branch operations (`git checkout`, `git switch`, branch creation)
- Never use force flags without explicit approval
- Never bypass git hooks or use `--no-verify`

**Commit Standards:**
- Use conventional commits: `type: description` or `type(scope): description`
- Types: feat, fix, chore, docs, test, refactor
- Use imperative mood: "Add feature" not "Added feature"
- Make separate commits per package when monorepo is implemented
- Never add Claude attribution to commits

**Merge Policy:**
- Use regular merge commits (not squash merge)
- Preserves commit history for semantic versioning

## Code Quality Rules

### TypeScript (When Implemented)
- Never use `any` type
- Use specific types: `string`, `number`, `object`, `unknown`
- Use `Parameters<typeof func>[0]` for library parameter types
- Use `as const` for literal types
- Proper type assertions: `value as SpecificType`

### Rust (When Implemented)
- Never run cargo commands from repository root
- Use NX commands: `nx build claude-code`, `nx test claude-code`
- If using cargo directly, cd to package directory first

## Architecture Principles

When implementing the actual toolkit:

### Repository Pattern
Follow: Service → Repository → Database
- Never bypass repository layer
- Keep business logic in Service, data operations in Repository
- Always rebuild after changes

### Planning and Implementation
- Create plans in `.claude/plans/` with current date/time for complex tasks
- Use task lists for user approval during implementation
- Follow rules in `.claude/rules/` for specific technologies

## Critical Rules

**Security and Safety:**
- All tests and lints must pass before release
- Never skip tests or lints
- Never commit secrets or sensitive data
- Never bypass safety mechanisms

**Evidence-Based Development:**
- Always verify facts using tools before making claims
- Ask for information instead of assuming
- Use tools to investigate before stating conclusions
- State observations, not assumptions