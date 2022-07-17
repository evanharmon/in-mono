# NEXTJS CREATE-NEXT-APP

## Resources

- [Create-next-app use](https://nextjs.org/docs/api-reference/create-next-app)

## Typescript

```console
npx create-next-app@latest --ts --use-npm
```

## TypeScript and Turborepo with NPM

there has to be a cleaner way to do this

install new next app:

```console
npx create-next-app@latest --ts --use-npm apps/my-app-name
```

- tsconfig.json updated to re-use turborepo packages/config
- next.config.js updated to support things like SVGR / next-transpile-modules

```console
cp ../another-app/tsconfig.json .
cp ../another-app/next.config.js .
```

additional steps explained:

add additional packages to package.json

- update port
- add clean script
- add dev dependencies for turborepo packages / additonal next.config.js
- COPY over package versions of next-app dependencies to prevent mis-matched versions / installs in new app/node_modules

```json
  "scripts": {
    "dev": "next dev -p 3006",
    "build": "next build",
    "export": "next export -o out",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf .next && rm -rf out"
  },
  "devDependencies": {
    "@evanharmon/config": "*",
    "@evanharmon/tsconfig": "*",
    "eslint": "8.15.0",
    "next-compose-plugins": "^2.2.1",
    "next-plugin-svgr": "^1.1.1",
    "next-transpile-modules": "^9.0.0",
    ...
  }
```

- clean out node_modules to prefer turborepo root level
- reset package-lock.json because it will keep placing packages in app level
- delete .gitignore as only one should exist in root of turborepo

```console
git checkout -- package-lock.json
rm -rf apps/my-app-name/node_modules
rm -rf apps/my-app-name/.gitignore
npm i
```
