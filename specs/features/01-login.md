# Login

## User story

As a shopper, I want to sign in with my account credentials so that I can use the Shop with an authenticated session.

## Overview

The QATools Playground Shop exposes a login page at `/login`. Guests reach it from the **Sign in** control in the primary navigation (`data-testid="nav-login"`). The page documents a seeded demo account:

- Email: `demo@promptqa.test`
- Password: `Demo@1234`

The login form (`data-testid="login-form"`) includes:
- Email
- Password
- A **Remember me** checkbox
- A **Sign in** submit button
- A **Create one** link to `/signup`

The form uses `novalidate`, so validation is application-controlled rather than native HTML5 popups.

Successful sign-in stores the session in `localStorage.pqa_auth_user`. The navbar then shows the user's name (the demo user displays as **Demo**) and a logout control instead of **Sign in**.

Sign-up flows are out of scope for this plan; they belong in a separate feature spec. Logout is covered only where it confirms that a session was established.

## Acceptance criteria

```gherkin
Feature: Shop login
  As a shopper
  I want to sign in with my credentials
  So that I can use the Shop as an authenticated user

  Background:
    Given the shopper is not signed in

  Scenario: Guest can open the login page from the navigation
    Given the shopper is on the home page
    When the shopper clicks Sign in in the primary navigation
    Then the shopper is on "/login"
    And the Login heading is visible
    And the email and password fields are visible
    And the Sign in submit button is visible

  Scenario: Sign in with valid demo credentials
    Given the shopper is on "/login"
    When the shopper fills Email with a valid existing email
    And the shopper fills Password with a valid existing password
    And the shopper clicks Sign in
    Then the shopper is redirected to "/"
    And the navbar shows the user's name
    And a Logout control is visible
    And Sign in is not visible in the navbar

  Scenario: Authenticated session persists across reload
    Given the shopper has signed in as the demo user
    When the shopper reloads the page
    Then the shopper remains signed in
    And the navbar still shows the user's name

  Scenario: Empty email shows an inline validation error
    Given the shopper is on "/login"
    When the shopper leaves Email blank
    And the shopper fills Password with any value
    And the shopper clicks Sign in
    Then an inline error is shown under the Email field
    And the form is not submitted
    And the URL remains "/login"

  Scenario: Wrong password shows an authentication error
    Given the shopper is on "/login"
    When the shopper fills Email with a valid existing email
    And the shopper fills Password with an invalid password
    And the shopper clicks Sign in
    Then an authentication error is visible
    And the shopper remains on "/login"
    And the shopper is not signed in

  Scenario: Invalid email format is rejected
    Given the shopper is on "/login"
    When the shopper fills Email with an email that has an invalid format
    And the shopper fills Password with a valid password
    And the shopper clicks Sign in
    Then an inline error is shown under the Email field
    And the error communicates that a valid email is required
    And the shopper remains on "/login"
```
## Out of scope

- Creating a new account
- Logout as a primary behavior — except asserting that Logout is visible after a successful login
- Checkout redirect to `/login`
- API-level login mocks

## Automation notes

These notes support later implementation against `specs/engineering/test-automation-standards.md`. They are not additional acceptance criteria.

- Page object: `tests/pages/login-page.ts` with a matching fixture in `tests/fixtures/index.ts`
- Specs import `{ test, expect }` from `../fixtures`
- One Playwright test per scenario (atomic tests, Arrange–Act–Assert)
- Stable locators on the login form include `login-page`, `login-form`, `login-email`, `login-password`, `login-remember`, `login-submit`, `goto-signup`, and `nav-login`
- The **Remember me** checkbox is present (`login-remember`); persistence of the demo session across reload is already covered without asserting a distinct Remember-me storage strategy

