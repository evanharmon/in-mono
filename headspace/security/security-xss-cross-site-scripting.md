# SECURITY XSS CROSS-SITE SCRIPTING

## Resources

- [MDN XSS cross-site scripting docs](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
- [MDN XSS types](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)

## Features
exploit where attack injects malicious client-side code in to a website
- allows code execution
- can allow access to cookies, session tokens, sensitive sit-specific info

## Types

### Stored XSS attacks
injected script stored permanently on target servers.
script is retrieved when browser sends request

### Reflected XSS attacks
User is tricked in to clicking a malicious link, submitting a crafted form, or browsing to a malicious site.
Injected code travels to the vulernable website
Browser executes the code since it's considered from a `trusted` server

### DOM-based XSS attacks
payload is executed as a result of modifying the DOM used by the original client-side script