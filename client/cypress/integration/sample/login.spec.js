describe('my first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get("img[alt='large_kakao_login_button']").click();
  });
  it('login test', () => {
    cy.url().then((url) => {
      console.log(url);
      expect(url).to.equal('http://localhost:3000/');
    });
  });
});
