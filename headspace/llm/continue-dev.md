## CONTINUE.DEV

## Resources
- [Continue.dev guide](https://docs.continue.dev/)
- [YT vid on setting up local models and vscode](https://www.youtube.com/watch?v=AV_8czoF3PU)
- [Customize continue.dev](https://docs.continue.dev/customize/overview)

## Features
vs code extension for using models for coding / chat
- works with `ollama` and local models

## Config
main config is located at `~/.continue/config.json`
repo / workspace version can be used instead. Store as `.continuerc.json`


## Run Ollama for continue
I set a keepalive so models unload
`OLLAMA_KEEP_ALIVE=1m ollama serve`
