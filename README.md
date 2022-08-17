My monorepo. It's a place to explore, break, and fix in the spirit of learning quickly

## [Turborepo](https://turborepo.org/)

My last team struggled with an ever growing number of web app repos, NPM packages, and duplicated
efforts across all repos. This mono repo acted as a POC and then I implemented turborepo
on the iZotope Cloud Team.

## Headspace

The `./headspace` folder contains tons of information from my experiences as a Lead Consultant and Cloud Engineer

## Challenges

I would much rather be doing POCs and learning new tech to help my future teammates.
I guess I have to do `./challenges` though as well. :stuck_out_tongue_closed_eyes:

## [Reactified MDN WebAudio Examples](./apps/mdn-webaudio-examples/)

webaudio was used extensively on my previous team. MDN has great examples but are all
vanilla javascript. This app is a work in progress to refactor each example to use React

## [21 day responsive challenge](./apps/21-day-challenge-responsive-layouts/)

The last app I worked on had a lot of CSS that broke responsiveness. This app is a work in progress
to better understand the native responsiveness of CSS for future web work on my next team.
Check out [Kevin Powell's Youtube Channel](https://www.youtube.com/kevinpowell)!

## [Music](./apps/music)

this app is parked and not being worked on. I've had to switch to studying for AWS exams,
code challenges, etc for my next job.

## [React Exercises](./apps/react-exercises/)

generic exercises in React. I can't keep them all in memory so it's a good reference.

## Running `./apps`

This monorepo is brought to you by turborepo. All commands are run from the root of the repo:

run all apps

```console
npm run dev
```

run a single app with package dependencies

```console
npx turbo run dev --filter=music...
```

## Deployment

:construction: In the process of setting up deployment for each of the apps with:

- separate AWS Accounts / s3 buckets / ALBs in my AWS Org per app
- central network AWS Account for all route53 / cloudfront
- central home page for `evanharmon.link` along with adjusted nextjs base paths to use a single CDN
