import { visitAccountBook } from '@src/utils';
import path from 'path';
const serverPath = path.resolve('./../../../server');
console.log(__dirname);
console.log(serverPath);
describe('createTransaction Test', () => {
  before(() => {
    cy.exec(`npm run db:reset`);
    cy.exec('npm run db:seed');
  });
  beforeEach(() => {
    visitAccountBook();
  });
  it('createTransaction in modal', () => {
    cy.get('svg[aria-label="button-create-modal"]').click();
    //금액
    cy.get('input[placeholder="금액"]').type('555');
    //카테고리
    cy.contains('p', '카테고리').click();
    cy.contains('타행이체').click();
    //결제수단
    cy.contains('결제수단을 선택하세요').click();
    cy.contains('삼성카드').click();
    // 내용
    cy.get('input[placeholder="내용"]').type('치킨을 타행이체 하였습니다');
    //날짜
    const date = new Date();
    date.setMilliseconds(0);
    date.setSeconds(0);
    const currentDate = date.toISOString().substring(0, date.toISOString().length - 8);
    cy.get('input[type="datetime-local"]').type(currentDate);
    //메모
    cy.get('input[placeholder="메모"]').type('비고');
    cy.contains('완료').click();
    expect(cy.contains('비고')).to.not.equal(null);
  });
  it('delete Transaction', () => {
    cy.contains('비고').click();
    cy.contains('삭제').click();
    cy.contains('비고').should('not.exist');
  });
});
