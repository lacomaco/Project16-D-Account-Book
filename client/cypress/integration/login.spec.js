import { login } from '@src/utils';

describe('login Test', () => {
  beforeEach(() => {
    login();
  });
  it('login success', () => {
    cy.url().then((url) => {
      console.log(url);
      expect(url).to.equal('http://localhost:3000/');
    });
  });
});
