# twitz.js

## What is it?

Twitz.js is a pure js library that **somehow** overcomes most of the hassle and constraints of the twitter API and lets you load and manage many different twitter user timeline widgets effortlessly.

The list of twitter accounts is easily manageable through the twitz.setup.js file while the styling can be easily customized through css.

[DEMO](http://positeam.net/twitz.js/)


## Can I customize it?

You can do a great deal of styling through css and some js setup variables. In terms of functionality you can set if you want more widgets to load after the first load, the number of widgets to load at every press of the more button, and also where to start within the accounts list.

Every set of widgets that is loaded is first shuffled - future plans to make this customizable as well


## What do I need to set it up?

+ Sign in to twitter and go to [your twitter lists](https://twitter.com/lists) and create a dummy list with public status (if you dont have one already)

+ Now go to [your widgets](https://twitter.com/settings/widgets) and create a "list" widget for the dummy list. Then from the generated code copy the url and the id of this list widget

Example

list url 'https://twitter.com/ExampleTwitterUsername/ExamplePublicTwitterListName'

widget id  '123456789012345678'

You can take these from an existing widget for public list as well

+ Make the appropriate changes to the setup file
- Add your twitter list url and id
- Add the twitter users you are interested to show through twitz.js
- Make appropriate changes to js variables and css to fit your needs of style and functionality

YOU ARE DONE!
