
# twitz.js 
 
 | NOW DEPRECATED - instead have a look at this https://publish.twitter.com |
 
## What is it? 
 
A pure js plugin that **somehow** overcomes most of the hassle and constraints of the twitter API and lets you load and manage many different twitter user timeline widgets effortlessly with a relatively good level of customizability. 

All you have to do is get a twitter list url, and a list widget number. All explained in detail below
 
The list of twitter accounts and other functionality as well as the styling can all be customized through the js setup and css. 
 
[DEMO](http://positeam.net/twitz.js/) 
 
 
## What do I need to set it up? 
 
+ Sign in to twitter and go to [your twitter lists](https://twitter.com/lists) and create a dummy list with public status (if you don't have one already) 
 
+ Now go to [your widgets](https://twitter.com/settings/widgets) and create a "list" widget for the dummy list. Then from the generated code copy the url and the id of this list widget 
 
Example 
 
list url 'https://twitter.com/ExampleTwitterUsername/ExamplePublicTwitterListName' 
 
widget id  '123456789012345678' 
 
You can find these from an existing widget for public list as well. 
 
+ Make the appropriate changes to the setup file 
- Add your twitter list url and id 
- Add the twitter users you are interested to show through twitz.js 
- Make appropriate changes to js variables and css to fit your needs of style and functionality 
 
YOU ARE DONE! 
 
Useful to create pages with context related twitter accounts  (eg.news, sports, cooking etc) 
 
 
## Can I customize it? 
 
Complete styling of everything but the actual widget through css and some js setup variables. You can not edit the actual widget though (apart from dimensions) since it comes through an iframe from twitter and the theme of it (light/dark) is set on creation. In terms of functionality you can set if you want more widgets to load after the first load, the number of widgets to load at every press of the more button, and also where to start within the accounts list. 
 
+ Every element of the widget container is targetable through css (twitz.css) 
- The accounts (twitz.setup.js) 
- The title of each widget (twitz.setup.js) 
- The widget border color (twitz.setup.js) 
- The color of links within the widget (twitz.setup.js) 
- The height of the widgets (twitz.setup.js) 
- The class name for widget style 1 and 2 (twitz.setup.js) 
- The number of widgets to load on every step (twitz.setup.js) 
- The load more button text (twitz.setup.js) 
- To load more or not (twitz.setup.js)
