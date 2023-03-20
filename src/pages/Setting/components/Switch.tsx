import i18next from "i18next";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

type Props = {
  checked?: boolean;
  onCheck?: React.Dispatch<React.SetStateAction<boolean>>;
};

type checkedProp = {
  checked: boolean;
};

const Wrapper = styled.div<checkedProp>`
  width: 2.77rem;
  height: 1.55rem;
  border-radius: 0.938rem;
  margin: 0 1em;
  background: ${({ checked }) => (checked ? "#41ca48" : "#cecece")};
  padding: 0.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Controller = styled.div<checkedProp>`
  height: 1.370rem;
  width: 1.370rem;
  border-radius: 0.938rem;
  background: #fcfff5;
  box-shadow: -1px 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  transform: ${({ checked }) => (checked ? "translate(20px)" : "translate(0)")};
`;

const Switch: FC<Props> = ({ checked = true, onCheck }) => {
  const { i18n } = useTranslation();

  const handleChange = () => {
    if (onCheck) {
      onCheck((state: any) => !state);
    }
  }

  return (
    <Wrapper checked={checked} onClick={handleChange}>
      <Controller checked={checked} />
    </Wrapper>
  );
};

export default Switch;