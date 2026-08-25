# QATools Playground Shop Tests - Project Constitution

This document is the **supreme reference** for how the QATools Playground Shop Tests project operates. All work on the project (human and AI) **must** align with it. When in doubt, use this file and the specs it references as the source of truth.

## Article I: Specs are the single source of context

All product and engineering context **must** reside as Markdown files under `specs/`.

**Use in Cursor:**
- Reference `@specs/` for full context
- Reference `@specs/features/01-login.md` (or relevant feature) for a given feature

## Article II: Cursor rules shall enforce the specs

- Cursor rules in `.cursor/rules/` (`.mdc` files with YAML frontmatter) **must** give the AI persistent, project-specific instructions that match this constitution.

**Required:** 
- The Cursor rule **must** have an always-apply rule that directs the AI to read and follow the specs under `specs/` and to use the relevant file in `specs/features/` for each feature.
- The AI **must** ask the user before implementing when something is unclear.