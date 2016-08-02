# Stepform Validation

The Stepform Plugin is designed to work in combination with the validation that already exists.

## It’s process is as follows:

1) Check to make sure that the required fields are filled out before the user is allowed to continue to the 2nd step of the form.

2) If a user clicks the Next button before all required fields are filled out then the missing fields are highlighted with an error coloring signifying to the user that these fields must be filled out before proceeding.

## Implementation:

You can include the plugin by simply downloading this repo and adding it to the plugins folder.

### Important Note:
The plugin is setup so that it only will load the necessary JavaScript when the page is a Parallax Landing Page.
However, the plugin can be used globally throughout the entire site by going to the plugin settings page and clicking the box labeled **"Use JavaScript Globally"**. This would be helpful is the site uses Stepforms on regular pages (Non-Parllax Pages)
