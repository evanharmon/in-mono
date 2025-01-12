# EXERCISM CLI

## Resources
- [Exercism CLI instructions](https://exercism.org/docs/using/solving-exercises/working-locally)

## Features
free code challenges across multiple languages

## Configuration
`exercism configure --token=<your-api-token>`
or with custom workspace like what I have:
```bash
# cd in to in-mono repo
exercism configure --workspace=$PWD/challenges/exercism
```

## Download an exercise
`exercism download --exercise=<exercise-slug> --track=<track-slug>`

## Submit an exercise solution
`exercism submit <implementation_file_paths>`