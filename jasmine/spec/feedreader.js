/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		 it('urls are defined', function() {
			for(var a in allFeeds){
				expect(allFeeds[a].url).toBeDefined();
				expect(allFeeds[a].url.length).not.toBe(0);
			}
		 });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 it('names are defined', function() {
			for(var a in allFeeds){
				expect(allFeeds[a].name).toBeDefined();
				expect(allFeeds[a].name.length).not.toBe(0);
			}
		 });
    });


    /* A new test suite named "The menu" */
	describe('The menu', function() {
		
        /* A test that ensures the menu element is
         * hidden by default.
         */
		 it('is hidden', function() {
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		 });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should display the menu when
          * clicked and hide it when clicked again.
          */
		  it('is clicked for visibility', function() {
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toEqual(false);
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		  });
	});

    /* A new test suite named "Initial Entries" */
	describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
		 beforeEach(function(done) {
			loadFeed(0, done);
				
			
		 });
		 it('if entries are more than 0', function () {
			var l=$('.feed .entry').length;
			expect(l).toBeGreaterThan(0);
		 });
    });

    /* A new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 var newEntries, oldEntries=null;
		 
		 beforeEach(function (done) {
			$('.feed').empty();
			loadFeed(0, function () {
				oldEntries=$('.feed').html();
			
			loadFeed(1, function () {
				newEntries=$('.feed').html();
				done();
			});
		 });
		 it('new feed is different from old feed', function () {
			 expect(oldEntries).not.toBe(newEntries);
		 });
	});
});
