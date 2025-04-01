# SECURITY SERVER SIDE REQUEST FORGERY

## Resources

- [7 examples of SSRF](https://spectralops.io/blog/7-examples-of-ssrf-and-how-to-protect-yourself-from-it/)

## Features
web app is manipulated to make server-side request to access internal systems or services

## Best practices
- use IMDSv2 on AWS EC2
- proper validation
- sanitize user-inputted data on requests
- whitelist allowed request targets / trusted file locations
- use Content Security Policy (CSP) headers to control external sources

## Examples

### Internal DNS resolution
- inject GET request for `example.local` to access internal services

### File vulernabilities
- looking for internal files like `/.env`

### HTTP request to internal service
not behind HTTPS
- trying to access EC2 metadata service

### Port scanning
allows attacker to create detailed map of system
discover potential security vulnerabilities
or gain unauthorized access to its resources

### Server-side cache poisoning
inserting fake info into DNS cache or web cache to harm users
