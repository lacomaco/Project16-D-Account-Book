export const login = () => {
  cy.visit('http://localhost:3000/login');
  cy.get('img[alt="large_kakao_login_button"]').click();
};

export const visitAccountBook = () => {
  login();
  cy.contains('데모용 가계부').click();
};
