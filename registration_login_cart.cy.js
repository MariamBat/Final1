describe('Zootopia Tests', () => {
    beforeEach(() => {
      cy.fixture('user').as('user'); 
    });
  
        it('Should show error when password field is empty during registration', function () {
      cy.visit('https://testzootopia.loremipsum.ge/ka/register'); 
      cy.fillRegistrationForm(this.user.validUser, true); 
      cy.get('button[type="submit"]').click(); 
  
      
      cy.contains('პაროლის ველი სავალდებულოა').should('be.visible');
      cy.get('input[name="email"]').should('have.value', this.user.validUser.email); 
    });
  
    
    it('Should successfully login with valid credentials', function () {
      cy.visit('https://testzootopia.loremipsum.ge/ka/login'); 
      cy.login(this.user.validUser.email, this.user.validUser.password); 
  
          cy.contains('წარმატებული ავტორიზაცია').should('be.visible');
    });
  
    
    it('Should show error with incorrect password', function () {
      cy.visit('https://testzootopia.loremipsum.ge/ka/login'); 
      cy.login(this.user.validUser.email, 'GssT1234%'); 
  
      
      cy.contains('პაროლი არასწორია').should('be.visible');
    });
  
    
    it('Should show error with non-existing email', function () {
      cy.visit('https://testzootopia.loremipsum.ge/ka/login'); 
      cy.login('nonexistinguser@example.com', 'anyPassword123'); 
  
      
      cy.contains('მომხმარებელი არ არსებობს').should('be.visible');
    });
  
    
    it('Should add product to cart from product details page', function () {
      cy.visit('https://testzootopia.loremipsum.ge/ka/login'); 
      cy.login(this.user.validUser.email, this.user.validUser.password); 
  
      cy.visit('https://testzootopia.loremipsum.ge/product/1'); 
      cy.addProductToCart(); 
  
      
      cy.contains('დამატებულია').should('be.visible');
    });
  });
  
