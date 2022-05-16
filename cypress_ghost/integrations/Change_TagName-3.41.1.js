let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
describe('Delete page', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
        })
        cy.visit('http://localhost:3001/ghost/')
        cy.wait(2000)        
        
    })
    it('Login, Test Change Tag Name', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.get('a[href="#/tags/"]').eq(0).click()
        cy.get('div[class="gh-list-row gh-tags-list-item ember-view"]').click()
        cy.get('#tag-name').type("The new name of the tag is this one, please check is different")
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
        cy.wait(100)
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
})