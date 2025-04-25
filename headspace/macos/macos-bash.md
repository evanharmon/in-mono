# MACOS BASH

## Features
macOS now defaults to `zsh`. The installed bash version is old.
This is how to setup bash as the default shell in macOS

## Steps
1. **Install updated bash**
`brew install bash`

2. **Add homebrew bash to shells*
`sudo vim /etc/shells`

add homebrew bash to top of list
```
/opt/homebrew/bin/bash
... rest of shells
```

3. **Change default login shell**
`chsh -s /opt/homebrew/bin/bash`

close and re-open terminal
