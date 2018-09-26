# Feed Reader Testing in Jasmine.js
This is a project to test a feedReader code in Jasmine.js with jQuery to select DOM elements.

# How to run the app locally
A simple way to go is to clone or download this git repository to your local machine. Locate to the repository folder and open index.html, you should be able to see the feeds load.

# The tests

## Test Suite "RSS Feeds"
This suite tests RSS feeds to be defined and non-empty, also, for url and name associated with the feed to be defined and non-empty.

## Test Suite "The menu"
This suite tests whether the menu is hidden by default. Also, it tests changes in the visibility of menu when menu icon is clicked that is menu should be visible and when clicked again that is menu should be again hidden.

## Test Suite "Initial Enteries"
This suite ensures that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

## Test Suite "New Feed Selection"
This one ensures that when a new feed is loaded by the loadFeed function that the content actually changes that is if the new feed is different than the old feed, the new feed is the content visible in feeds. 
