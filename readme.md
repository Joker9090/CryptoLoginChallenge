# Login Crypto Challenge
Base code from [Solito](https://example.solito.dev)
There is Redux configuratedto handle global scope, it works fine in both web and native side.

## Diagram Concept
![DiagramImage](https://github.com/Joker9090/CryptoLoginChallenge/blob/master/apps/next/public/CryptoLoginChallenge.png?raw=true)

## Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- `dripsy` for theming/design (you can bring your own, too)
- Redux
- Expo SDK 44
- Next.js 12
- React Navigation 6

## Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev: `yarn native`
  - Runs `expo start`
