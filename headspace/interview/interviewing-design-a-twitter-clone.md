# INTERVIEWING DESIGN A TWITTER CLONE

Lots of variants on this question for `uber`, `instagram`, etc
This is a communication exercise

## What to focus on

- data model / database storage
- talking it out
- voice what you are thinking / think out loud
- drawing it out

## What NOT to focus on

- specific technologies / stacks

## Algocast General Strategy

- focus on two core features
- possible implementation
- identify and address difficulties
- solutions for scaling

### Focus on two core features

can be helpful to diagram out simple UI as reference for core features

example feature 1: tweeting

- how does tweeting work?
- what happens / how does a user create a tweet?

example feature 2: feed

- how do others see your tweets?

### Possible Implementation

#### Web Interface

- tweet button
- feed
- trending topics section
- what happens on the backend when the `tweet` button is clicked?

#### Tweets Database / Datastores

- what does a tweet look like in the database?
- how to to make the `#topic` and `@mention` systems?
- how to implement retweets?

#### Feed

- how to show interesting tweets at top of feed?

### Scaling

possible discussion options:

- caching
- deployment options
