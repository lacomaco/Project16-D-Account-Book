import { visitAccountBook } from '../utils';

describe('createTransaction Test', () => {
  beforeEach(() => {
    visitAccountBook();
    cy.get('svg[aria-label="button-create-modal"]').click();
  });
  it('createTransaction in modal', () => {
    //given
    /*
    금액
    카테고리
    결제수단
    내용
    날짜
    메모
    */
    //when
    //then
  });
});
