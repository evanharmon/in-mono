# GITHUB ACTIONS ARTIFACTS

## Resources

- [Github Actions artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
- [Github Actions upload-artifact](https://github.com/actions/upload-artifact)
- [Github Actions download-artifact](https://github.com/actions/download-artifact)

## Features

- download artifact default name is `artifact` if none given at upload
- artifact retention time can be specified in the action
- good for sharing data between jobs

## Limitations

- can only download an artifact in a workflow that uploaded the same artifact
