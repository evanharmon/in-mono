# PYTHON FLASK

## Resources

- [Python Flask user guide](https://flask.palletsprojects.com/en/2.2.x/#user-s-guide)
- [Python Flask vscode tutorial](https://code.visualstudio.com/docs/python/tutorial-flask)
- [Flask on local dev with SSL](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https)


## Limitations
- flask run doesn't work with TLS certs for local dev

## Reload on changes

`FLASK_DEBUG=true python3 node.py`

## CLI commands

### Run in dev server mode
not production - debug mode
`flask run --host=0.0.0.0 --port=3000`