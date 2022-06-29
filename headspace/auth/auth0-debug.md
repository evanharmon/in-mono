# AUTH0 DEBUG

## Resources

## Install debugger extension

Install the extension for a tenant:

in auth0, click `Extensions` menu on left, install the
`Auth0 Authentication API Debugger` extension

## Access debugger

in auth0, click `Extensions` menu on left, click `Installed Extensions` tab

## Use Debugger

Under the `Configuration` sub tab:

- set the `Application` dropdown

Under the `OAuth2 / OIDC` sub tab:

audience: ''
Response type: `id_token token code`
Scope: `openid name email nickname offline_access`
Nonce: `nonce`

Click `OAUTH2 / OIDC LOGIN` user flow button towards top
