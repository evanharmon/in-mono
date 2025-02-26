# SECURITY CSRF / XSRF CROSS-SITE REQUEST FORGERY

## Resources

- [MDN CSRF / XSRF docs](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)

## Features
Related to cross-site scripting attacks.
Attacker cause user's browser to make a request to the website's backend without user consent.
XSS payload can be used to launch a CSRF attack.

## Example
User clicks an IMG that is actually a link to a bank server to withdraw money

```html
<img src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```