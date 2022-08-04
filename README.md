# Login Crypto Challenge
Base code from [Solito](https://example.solito.dev)
There is Redux configuratedto handle global scope, it works fine in both web and native side.

## Diagram Concept
![DiagramImage](https://raw.githubusercontent.com/Joker9090/CryptoLoginChallenge/master/apps/next/public/Diagram4CryptoChallenge.png)

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


## Configure Env File
Create a local .env file with the following variables
```
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_API_URL=
```
The env files need to be one for each app ( NEXT and EXPO ).
Put the  .enf files inside apps/next and apps/expo folders

## TO IMPROVE
- lOGIN, validations
- list of crypto,
- detail crypto list
- chart 
- ui blem 


## Questions 
- [Q] How to perform cross-platform data fetching? (Taking into account server-side (web app/nextjs) and client-side (mobile app) rendering)
- [A] IDK if we can use server side rendering in React-native, but for react(app/nextjs) we can use getStaticProps and getServerSideProps. Good for SEO :)

- [Q]How should we login in a cross-platform app? (Let's assume it's done with Firebase, how would it be implemented to be cross-platform) 
- [A]For this, we can make a Service(singleton) integration consuming an API to singup/login/logout methods.
Obviusly its neccessary to storage accessToken and refreshToken in the app. Here we need to make differents storage Repositories for React-native / React apps. 
ReactNative > AsyncStorage > Service > ReduxActionCall
React(next) > LocalStorage > Service > ReduxActionCall

- [Q]How would you implement a cross-platform http client? (That is, it worked both server-side and client-side)
- [A]Doing a good Service!! we can separate funcionalities to gain some versatility

## Coments 
- I spent some time reading documentation and viewing some videos about solito and extra deps. using this monorepo more like react-native needs is kindy tricky. I have more experience working with scss or css vainilla, and now the components has an styledObject like scheme.
- At First I think about the global state for both worlds
- I figure out that this implementation is closest to flutter. Doing this in flutter maybe have better performance in mobile but less stylish power in web
is like React-native is 60-40 WEB-MOBILE vs Flutter 30-70 WEB-MOBILE

## Learn More
- Time-Spent = 5 hours
- Time-Spent-pretends = 12 hours

