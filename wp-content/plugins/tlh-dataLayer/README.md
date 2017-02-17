# tlh-dataLayer
WP data layer plugin
 * Version: 1.0.0
 * Author: The Learning House - Brent maggard
 
## Data Layer Variables Returned
 
  * tlh-pageTitle - title of the page
  * leadID - the legacy lead ID that is returned after lead submission
  * tID -   the allocadia ID that is passed in the URL
  * tlh-pagePostType - This is whether it’s a post or page
  * tlh-pagePostType2 - This is whether it’s a single post, category archive, or page
  * pageCategory - This is an array of the categories the post was categorized in
  * pageAttributes - This is an array of the tags the post was tagged for
  * pagePostAuthor - This is the author or the post.
  * pagePostDate
  * pagePostDateYear
  * pagePostDateMonth
  * pagePostDateDay
  * siteSearchTerm
  * siteSearchFrom
  * siteSearchResults
 
## Questions
 * Do we need to check for /thnak-you/ page or just check to the lid in URL?
 * If lid is present should I fire a conversion value of 1, so that in the analytics software we can check for that and use that as the indication of a conversion?
 * Do I need to set a TID cookie so that I can make sure it is added to the datalayer on every page. or just grabbing it once and setting it as a variable at the visit level in analytics OK?
