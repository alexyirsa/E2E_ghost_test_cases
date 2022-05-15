<<<<<<< HEAD
const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')


When('I enter new post content {kraken-string}', async function (content) {
    let element = await this.driver.$('[data-placeholder="Begin writing your post..."]')
    return await element.setValue(content);
});

When('I click on Publish', async function(){
    let element = await this.driver.$('div[class="ember-view.ember-basic-dropdown-trigger.gh-btn.h-btn-outline.gh-publishmenu-trigger"]')
    return await element.click();
});

When('I click on Drafts', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=draft"]')
    return await element.click();
});

When('I enter to first draft', async function(){
    let element = await this.driver.$('a[class="ember-view.permalink.gh-list-data.gh-post-list-featured"]')
    return await element.click();
});

When('I click on Publish option', async function(){
    let element = await this.driver.$('button[class="gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"]')
    return await element.click();
});

When('I enter to first published', async function(){
    let element = await this.driver.$('#ember1318')
    return await element.click();
});

When('I click on Update', async function(){
    let element = await this.driver.$('#ember1532')
    return await element.click();
});

When('I click on Update option', async function(){
    let element = await this.driver.$('#ember1587')
    return await element.click();
});

When('I click on Pages', async function(){
    let element = await this.driver.$('a[href="#/pages/"]')
    return await element.click();
});

When('I click on New Page', async function(){
    let element = await this.driver.$('a[href="#/editor/page/"]')
    return await element.click();
});

When('I click on Scheduled', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=scheduled"]')
    return await element.click();
});

When('I click on Scheduled New post', async function(){
    let element = await this.driver.$('#ember2341')
    return await element.click();
});

When('I click Post', async function(){
    let element = await this.driver.$('a[href="#/posts/"]')
    return await element.click();
});

When('I click on New Post', async function(){
    let element = await this.driver.$('a[href="#/editor/post/"]')
    return await element.click();
});

When('I click on Published', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=published"]')
    return await element.click();
});

=======
const { Given, When, Then } = require('@cucumber/cucumber');
var {browser} = require('cucumber')


When('I enter new post content {kraken-string}', async function (content) {
    let element = await this.driver.$('*="Begin writing your post..."')
    return await element.setValue(content);
});

When('I click on Publish button', async function(){
    let element = await this.driver.$('span=Publish')
    return await element.click();
});

When('I click on Drafts', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=draft"]')
    return await element.click();
});

When('I enter to first draft', async function(){
    let element = await this.driver.$('.ember-view.permalink.gh-list-data.gh-post-list-title');
    return await element.click();
});

When('I click on Publish option', async function(){
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    return await element.click();
});

When('I enter to first published', async function(){
    let element = await this.driver.$('#ember1318')
    return await element.click();
});

When('I click on Update', async function(){
    let element = await this.driver.$('#ember1532')
    return await element.click();
});

When('I click on Update option', async function(){
    let element = await this.driver.$('#ember1587')
    return await element.click();
});

When('I click on Pages', async function(){
    let element = await this.driver.$('a[href="#/pages/"]')
    return await element.click();
});

When('I click on New Page', async function(){
    let element = await this.driver.$('a[href="#/editor/page/"]')
    return await element.click();
});

When('I click on Scheduled', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=scheduled"]')
    return await element.click();
});

When('I click on Scheduled New post', async function(){
    let element = await this.driver.$('#ember2341')
    return await element.click();
});

When('I click Post', async function(){
    let element = await this.driver.$('a[href="#/posts/"]')
    return await element.click();
});

When('I click on New Post', async function(){
    let element = await this.driver.$('a[href="#/editor/post/"]')
    return await element.click();
});

When('I click on Published', async function(){
    let element = await this.driver.$('a[href="#/posts/?type=published"]')
    return await element.click();
});

>>>>>>> Master
