# twitz.js

## What is it?

Twitz.js is a pure js library that *somehow* overcomes most of hassle and constraints of the twitter API and lets you  load and manage many different twitter user timeline widgets effortlessly.

The list of twitter accounts is easily manageable through the twitz.setup.js file

[SEE THE DEMO](http://positeam.net/twitz.js/)


## Can I customize it?

Style through css and js setup variables. In terms of functionality you can set if you want more widgets to load after the first load, and the number of widgets to load at every press of the more button. Where to start within the accounts list is also available.

Every set of widgets that is loaded is first shuffled - future plans to make this customizable as well


## What do I need to set it up?

+ Sign in to twitter and go to [your twitter lists](https://twitter.com/lists) and create a dummy list with a dummy user and public status (if you dont have one already)

+ Now go to [your widgets](https://twitter.com/settings/widgets) and create a "list" widget for the dummy list , copy the url and the id of this list

Example
list url 'https://twitter.com/ExampleTwitterUsername/ExamplePublicTwitterListName';
list id  '123456789012345678';

You can take these from an existing widget for public list as well

+ Make the appropriate changes to the setup file
- Add your twitter list url and id
- Add the twitter users you are interested to show through twitz.js
- Make appropriate changes to js variables and css properties to match your needs
