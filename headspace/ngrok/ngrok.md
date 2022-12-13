# NGROK

## Resources

- [Ngrok getting started](https://dashboard.ngrok.com/get-started/setup)
- [Ngrok docs](https://ngrok.com/docs)

## Features

- great as a reverse proxy

## Install

```console
brew install --cask ngrok
```

## Configure

have to setup auth token locally

```console
ngrok config add-authtoken aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

## Run

ngrok will spit out the url for use in reverse proxy

```console
ngrok http 3000
```

ngrok will then show `Forwarding` url address for use

`https://1111-2222-3333-4444-5555-6666-7777-8888-9999.ngrok.io`
