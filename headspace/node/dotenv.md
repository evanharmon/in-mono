# DOTENV

## Resources
- [SO](https://stackoverflow.com/questions/19331497/set-environment-variables-from-file-of-key-pair-values)

## CLI

### Load .ENV Files From CLI

```console
npm install -g dotenv-cli
```

```console
dotenv -- mvn exec:java -Dexec.args="-g -f"
```

## Load /Export .env Variables To Shell
handy if you don't want to download another package / helper

```bash
set -o allexport; source .env; set +o allexport
```

## Examples by language / framework

### NODEJS

Reference .env config file by exact path

```javascript
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') }) // eslint-disable-line global-require
```
