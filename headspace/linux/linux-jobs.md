# Linux Jobs

## Limitations
- `ctrl+c` and `ctrl+z` don't work for all programs

## Commands

### List Background Processes
`jobs`

### List Jobs PIDs
`jobs -l`

## Shortcuts

### Run Command and Send to Background
allows process to continue running - backgrounding
`npm start &`

### Run Command With A Comment
`npm start `# Authenticator ``

### Stop Foreground Process
<C-Z>

### Refer To Background Process Number n
`%n`

### Refer To Background Process By String
`%?string`

### Restart Background Process
```bash
bg
# or by job id
bg 1
```

### Bring Background Process To Foreground
`fg`
- example: `fg 1`

### Kill A Job Process n
`% kill %n`
