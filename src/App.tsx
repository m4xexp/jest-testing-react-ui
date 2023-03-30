import React, { useState } from 'react';

// * External components-------------------------------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Chanel from './components/Chanel';
import Card from './components/Card';

// * Components----------------------------------------------------

function App() {
  const [selectedMenu, setSelectedMenu] = useState<string>('button');
  const notify = (toastText: string) => toast(toastText);

  const handleSelectedMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="h-screen w-screen bg-gray-800">
      <Sidebar
        onToast={notify}
        menu={selectedMenu}
        setMenu={handleSelectedMenu}
      />

      <div
        data-testid="app-container"
        className="flex h-full w-full items-center justify-center p-10 pl-[4.5rem]"
      >
        {selectedMenu === 'button' && <Button />}
        {selectedMenu === 'chanel' && <Chanel />}
        {selectedMenu === 'card' && <Card />}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
