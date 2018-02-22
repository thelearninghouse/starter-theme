module.exports = {
    url: function() {
        return this.api.launchUrl + '/wp/wp-login.php';
    },
    elements: {
        user: '#user_login',
        password: '#user_pass',
        submitButton: '#wp-submit'
    },
    commands: [
        {
            login: function(){
                this.navigate();
                return this.fillLogin().submit();
            },
            fillLogin: function(){
                this.waitForElementVisible('@user', 5000);
                this.setValue('@user', []);
                this.setValue('@user', [this.api.globals.user]);
                this.api.pause(100);
                this.waitForElementVisible('@password', 5000);
                return this.setValue('@password', this.api.globals.password);
            },
            submit: function() {
                this.waitForElementVisible('@submitButton', 5000);
                //this.api.saveScreenshot('screenshots/login-' + (new Date()).getTime() + '.png');
                this.click('@submitButton');
                return this.waitForElementVisible('#adminmenu #menu-dashboard .current', 15000);
            },
            newPost: function(){
                this.api.url( this.api.launchUrl + '/wp/wp-admin/post-new.php' );
                this.waitForElementVisible('body.post-new-php', 15000);

                return this.api.execute(function() {
                    YoastACFAnalysisConfig.refreshRate=10;
                }, [] );
            },
            openMediaLibraryTab: function(){
                this.api.useXpath();
                var mediaLibraryTabSelector = "//div[contains(@class, 'media-modal')]//a[contains(@class, 'media-menu-item') and text()='Media Library']";
                this.waitForElementVisible(mediaLibraryTabSelector, 10000);
                this.click(mediaLibraryTabSelector);
                this.api.useCss();
            }
        }
    ]
};