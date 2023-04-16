import React, { createContext, useState } from "react";

interface MyContextType {
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  balance: string;
  setBalance: (value: string) => void;
  birthday: string;
  setBirthday: (value: string) => void;
}

const initialContext: MyContextType = {
  name: "",
  setName: () => {},
  phone: "",
  setPhone: () => {},
  balance: "",
  setBalance: () => {},
  birthday: "",
  setBirthday: () => {},
};

export const MyContext = createContext<MyContextType>(initialContext);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState(initialContext.name);
  const [phone, setPhone] = useState(initialContext.phone);
  const [balance, setBalance] = useState(initialContext.balance);
  const [birthday, setBirthday] = useState(initialContext.birthday);

  const contextValue = {
    name,
    setName,
    phone,
    setPhone,
    balance,
    setBalance,
    birthday,
    setBirthday,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
