# cypress-e2e-uitest
## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- All packages installed using `npm i`

## Commands
- `npx cypress open` to launch the GUI
- `npm run cy:browser:chrome` to run test in chrome headlessly
- `npm run cy:browser:firefox` to run test in firefox headlessly

## Project Structure
```
├── cypress
│   ├── datasets        -- Mock json files and test data
│   ├── e2e             -- This is where the test is
│   ├── interface       -- Page objects
│   ├── reports
│   └── support
```

## Notes

- For the best coding experience and correct style check please use `Visual Studio Code` to review.
- The project is written in javascript using ABT pattern (Action Based Testing).
- Repo is run using github CI on every commit.
- While multiple locator types were suggested, it's far more efficient and clean to just use css locator because cypress is built upon jquery. However, different query techniques were used.
- `prettier` and `eslint` is used to keep code neat.
