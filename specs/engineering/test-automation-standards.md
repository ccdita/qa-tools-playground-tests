# Test Automation Standards

## Page Object Model

- All Playwright tests **must** use the Page Object Model (POM) pattern.
- Playwright tests **must not** use raw, inline chains of `page.*`.

### File layout
```
tests/
    fixtures/       
        index.ts        ← One fixture file to export test and expect for all spec files
    pages/
        login-page.ts
    ...
```

### One class per file, one file per page

- Each distinct page or modal in the application **must** have a separate page object class. 
- A single file **must not** have combine multiple pages.
- A new file **must** be added whenever a new page or modal is created.

### Class Structure

Page object classes **must** follow the conventions from the [Playwright POM documentation](https://playwright.dev/docs/pom).

Rules:
- `page: Page` **must** be accepted as the sole constructor argument.
- All locators used by the class **must** be declared as a `readonly` field and initialized in the constructor.
- Interaction and navigation logic **must** be in page object methods.
- Assertions **must** be in test files or assertion helpers, not in page object methods.
- Methods **must not** return raw locators. They **should** return `void` or a sub-page object when a navigation opens a new page.

### Usage in tests

- All spec files **must** import `test` and `expect` from `../fixtures` (not from `@playwright/test`).
- The test **must** only declare the page object fixtures it needs as destructured parameters.
- The test **must** call page object methods for all interactions (Act).
- The test **must** assert directly against page object locators using `expect` (Assert).

## Page Object Fixtures

- Every page object **must** have a corresponding fixture so tests receive page objects automatically rather than constructing them with `new`.

### Fixture file
- All fixtures **must** live in a single fixture file: `tests/fixtures/index.ts`.
- The fixture file **must** re-export `test` and `expect` so spec files have a single import point.

Rules:
- The fixture file **must** follow the [Playwright fixtures documentation](https://playwright.dev/docs/test-fixtures) patterns.
- The fixture file **must** use `test.extend<T>()` with a typed interface listing every fixture.
- Each fixture **must** receive `{ page }` and call `await use(new PageObject(page))`.
- Each fixture **must** place setup code before `await use()` and teardown code after it when needed.
- A new fixture entry **must** be added whenever a new page object class is created.
- Spec files **must** import `{ test, expect }` from `../fixtures`, never from `@playwright/test`.

## Atomic Tests

Every test **must** cover exactly one behavior.

## Arrange-Act-Assert

Test bodies **must** be structured as:

1. **Arrange**: set up preconditions.
2. **Act**: perform the single action under test.
3. **Assert**: verify the expected outcome.

## Test Independence

- Tests **must not** rely on state created by another test.
- Each test **must** create its own preconditions and leave the web application in a state that does not affect subsequent tests.