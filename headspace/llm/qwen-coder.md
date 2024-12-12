# QWEN CODER

## Resources

- [Github Qwen2.5-Coder](https://github.com/QwenLM/Qwen2.5-Coder)
- [Qwen getting started guide](https://qwen.readthedocs.io/en/stable/run_locally/ollama.html)

## Setup steps on mac
ensure python and venv setup
```sh
brew install python3
python3 -m venv .venv
source .venv/bin/activate
pip3 install --upgrade pip setuptools
```

install required packages:
unix:
`pip3 install torch torchvision transformers accelerate`

mac m1
`pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu`

ensure you have a [hugging face](https://huggingface.co/) account and token created.

```sh
pip3 install huggingface_hub
huggingface-cli login
huggingface-cli download "Qwen/Qwen2.5-Coder-1.5B"
```