import React, { useState } from 'react';
import useStore from '../../../../hook/use-store/useStore';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalItem from '../form-modal-template/FormModalItemWrapper';
import FormModalLabel from '../form-modal-template/FormModalLabel';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { observer } from 'mobx-react';
import CategoryPreview from '../../category-preview/CategoryPreview';
import InputText from '../../inputs/input-text/InputText';
import formModal from '../../../../constants/formModal';
import useGetParam from '../../../../hook/use-get-param/useGetParam';
import { convertToCategory } from '../formUtils';
import { BLACK } from '../../../../constants/color';

const FormModalCategory: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const toggle = rootStore.modalStore.createCategoryFormStore;

  const [name, setName] = useState<string>('카테고리 1');
  const [inputColor, setInputColor] = useState<string>(BLACK);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const { show } = toggle;
  const modalToggle = (): void => {
    toggle.toggleShow();
  };

  const onCreateIncomeCategory = () => {
    try {
      const incomeCategory = convertToCategory(id, name, inputColor);
      rootStore.categoryStore.createIncomeCategory(incomeCategory);
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  const onCreateExpenditureCategory = () => {
    try {
      const expenditureCategory = convertToCategory(id, name, inputColor);
      rootStore.categoryStore.createExpenditureCategory(expenditureCategory);
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  return (
    <ModalBackground show={show} closeModal={modalToggle}>
      <FormModalWrapper>
        <FormModalHeader
          modalName={formModal.CREATE_CATEGORY_MODAL_NAME}
          blueName={'생성'}
          closeModal={modalToggle}
          clickBlue={toggle.incomeFlag ? onCreateIncomeCategory : onCreateExpenditureCategory}
        />
        <FormModalItem>
          <CategoryPreview title={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.CATEGORY_LABEL_NAME}</FormModalLabel>
          <InputText maxLength={8} placeholder={formModal.CATEGORY_PLACEHOLDER} value={name} onChange={onChangeName} />
        </FormModalItem>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalCategory);
