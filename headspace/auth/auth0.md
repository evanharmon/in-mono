# AUTH0
notes on using auth0

## Resources

- [Auth0 With Cognito](https://auth0.com/docs/integrations/integrating-auth0-amazon-cognito-mobile-apps)
- [SPA Roles / Permissions](https://auth0.com/docs/architecture-scenarios/spa-api/part-2#configure-the-authorization-extension)
- [Amplify Auth With Auth0](https://aws-amplify.github.io/docs/js/authentication#federated-with-auth0)
- [Auth0 Database Connections](https://auth0.com/docs/authenticate/database-connections)
- [Auth0 OpenId Cognito Identity Pool Authentication Provider Guide](https://auth0.com/docs/customize/integrations/aws/amazon-cognito#create-a-new-openid-connect-provider)

## Create Cookie Secret

```console
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```
