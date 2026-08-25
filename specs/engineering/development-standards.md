# Development Standards

## Spec-first Development

- The spec-first development process **must** be followed when implementing.
- Each feature **must** have a written spec (under `specs/features/`) that includes user stories, acceptance criteria, and other descriptions as needed.
- These specs **must** be kept even after implementation.

## Feature Spec Guidelines

- Feature spec files **must** be named as "##-feature.md" (e.g., 01-login.md).
- Feature specs **must** have a three-part user story following the formula "As a [who], I want to [what] so that [why]" to capture a user's role, desired action, and desired benefit.
- Acceptance criteria in a feature spec **must** use Gherkin and follow the [Cucumber Gherkin Reference documentation](https://cucumber.io/docs/gherkin/reference/).
