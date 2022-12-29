# MACOS FINDER

## Show hidden files MacOS Ventura

`cmd + shift + .` while in finder window

## Show Hidden Files in Finder

(note: this didn't work for me in MacOS Ventura)

- Open Terminal found in Finder > Applications > Utilities
- In Terminal, paste the following:
  `defaults write com.apple.finder AppleShowAllFiles YES`
- Hold the 'Option/alt' key, then right click on the Finder icon in the dock
  and click Relaunch

## Delete Finder Plist

can help with slowdowns / crashing of finder

```console
rm ~/Library/Preferences/com.apple.finder.plist
```

## Show / Hide Finder

```console
alias hidedesktop="defaults write com.apple.finder CreateDesktop -bool false && killall Finder"
alias showdesktop="defaults write com.apple.finder CreateDesktop -bool true && killall Finder"
```
