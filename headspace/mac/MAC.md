# MAC OS X

### Preview

#### Clear Cache To Fix Crashing

- [Clear Preview Cache](https://becomethesolution.com/blogs/mac/mac-clear-preview-cache)

```console
defaults delete com.apple.Preview.LSSharedFileList RecentDocuments
defaults write com.apple.Preview NSRecentDocumentsLimit 0
defaults write com.apple.Preview.LSSharedFileList RecentDocuments -dict-add MaxAmount 0
killall Dock
```
