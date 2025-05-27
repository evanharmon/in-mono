# SECURITY CSRF / XSRF CROSS-SITE REQUEST FORGERY

## Resources

- [MDN CSRF / XSRF docs](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)

## Features
Related to cross-site scripting attacks.
- Attacker cause user's browser to make a request to the website's backend without user consent.
- XSS payload can be used to launch a CSRF attack.
- XSS can bypass a lot of CSRF mitigation strategies

## Domains
browsers have security measures like same-origin policy to prevent reading data
from different domains. Browsers don't restrict SENDING requests (like forms)
to other domains though!

## Mitigations
- use CSRF tokens in user sessions if possible
- use SameSite: strict for cookies

## Best practices
- don't solely rely on Referer Header
- don't use GET requests for any state-changing operations

## Example
User clicks an IMG that is actually a link to a bank server to withdraw money

```html
<img src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```