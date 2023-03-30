import React from 'react';
// import { Id } from 'react-toastify';

interface Props {
  // onToast?: (toastText: string) => Id;
}

const Button: React.FC<Props> = () => {
  const [useButtonText, setButtonText] = React.useState('');

  const handleClick = (text: string) => {
    setButtonText(text);
  };

  React.useEffect(() => {
    return () => setButtonText('');
  }, []);

  return (
    <>
      <div
        data-testid="button-component"
        className="flex flex-col items-center justify-center gap-10"
      >
        <h2 className="text-4xl font-bold text-white">
          {useButtonText} Button component
        </h2>
        <button
          data-testid="button-test"
          className="rounded-[28px] bg-white py-4 px-8 text-xl text-[#23272a] transition-all duration-150 hover:rounded-xl"
          onClick={() => handleClick('clicked')}
        >
          Button
        </button>
      </div>
    </>
  );
};

export default Button;
