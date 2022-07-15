# NEXTJS VERCEL EXAMPLE DEPLOY

## Resources

- [Vercel Monorepo Setup](https://vercel.com/docs/concepts/monorepos#using-monorepos-with-vercel-dashboard)
- [Vercel Turborepo Setup](https://vercel.com/docs/concepts/monorepos/turborepo)
- [Ignore build step on file changes outside project](https://vercel.com/docs/concepts/projects/overview#ignored-build-step)
- [Ignore build step script examples](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel)

## Example Auth0 Deploy

- [From Github Issue](https://github.com/evanharmon/in-mono/issues/24#issue-1275440912)

after looking at [serverless cdk](https://github.com/serverless-nextjs/serverless-next.js#faq) for nextjs, the lambda cold starts / code size / routing limitations look less than stellar. Deploy on vercel instead

Following the current vercel practice of development only being on localhost. Vercel will only deploy to prod environment

steps:

- [x] change package.json to node version 16 as 18 not supported in Vercel

Vercel:

- [x] import github repo
- [x] create project for `music`
- [x] customize build command to run turbo
- [x] set root directory to `apps/music`
- [x] customize install command for npm workspaces
- [x] create and set auth0 cookie secret build env
- [x] set ignore build step on file changes outside music / packages
- [x] verify deploy can login / logout

Auth0:

- [x] set auth0 env vars
- [x] create my gmail user on production tenant
- [x] adjust PROD tenant values for vercel deploy urls
- [x] add .env.production file with domain information

vercel general settings:

root directory: `apps/music`

BUILD COMMAND: `cd ../../ && npx turbo run build --filter=music...`
INSTALL COMMAND: `npm install --prefix=../..`

ignore build command: `git diff --quiet HEAD^ HEAD ./ ../../packages/`

vercel environment variables:

AUTH0_CLIENT_SECRET: on preview and production
AUTH0_SECRET: on preview and production
