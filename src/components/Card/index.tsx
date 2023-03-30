import React from 'react';
import { GiSpeaker } from 'react-icons/gi';
import { HiPhoneMissedCall } from 'react-icons/hi';
import styled from 'styled-components';

interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-4xl font-bold text-white">Card component</h2>
      <Container className="flex h-[400px] w-[640px] flex-col gap-4 rounded-xl bg-[#292841] px-4 py-6">
        <ChanelInfo />
        <Screen />
        <Controller />
      </Container>
    </div>
  );
};

const Container = styled.div`
  box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.06);
`;

const ChanelInfo = () => {
  return (
    <div className="flex items-center gap-1 ">
      <GiSpeaker className="h-5 w-5 text-[#a8a8b2]" />
      <h2 data-testid="chanel-name" className="text-white">
        just-chillin
      </h2>
    </div>
  );
};

const Screen = () => {
  return (
    <div className="flex w-full gap-4">
      <div className="h-[240px] w-[440px] overflow-hidden rounded-lg bg-[#ffe75c]">
        <img
          src="https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="testing application"
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className="h-[100px] w-[160px] rounded-lg bg-[#eb459f]"></div>
        <div className="h-[100px] w-[160px] rounded-lg bg-[#5865f2]"></div>
      </div>
    </div>
  );
};

const Controller = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <button className="h-12 w-12 rounded-full bg-white"></button>
      <button className="h-12 w-12 rounded-full bg-white"></button>
      <button className="h-12 w-12 rounded-full bg-white"></button>
      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7366b]">
        <HiPhoneMissedCall className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default Card;
