# Code Challenges

using exercism.org

## Resources

- [Exercism Working Locally Guide](https://exercism.org/docs/using/solving-exercises/working-locally)

## Requirements

- setup a github account codespace secret `EXERCISM_TOKEN` in your github profile, value can be obtained from exercism site
- assumes use of github codespaces

## GIT / Repo Notes

- manage outside turbo repo
- CLI assumes yarn and uses different config file setups

## Configuring Exercism CLI

exercism CLI must be configured and setup on every rebuild of the container

workspace value will automatically namespace folder creation based on language / track

typescript example

```console
exercism configure --token=$EXERCISM_TOKEN
exercism configure --workspace=/workspaces/in-mono/challenges/exercism
```

## Starting a Challenge

- download a challenge `exercism download --exercise=hello-world --track=typescript`
- open integrated terminal to created directory where `package.json` exists for exercise
- run `npm i`

## Running a Challenge

`npm test`

## Submit Challenge

reference the `HELP.md` for the `exercism submit hello-world.ts` command for the exercise
