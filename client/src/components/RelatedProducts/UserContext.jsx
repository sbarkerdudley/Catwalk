import React from 'react';
import ReactDOM from 'react-dom';

const UserContext = React.createContext({});

export const ProductsProvider = ({ children }) => {
  return function WrappedComponent() {
    return (
      <UserContext.Provider>
        {children}
      </UserContext.Provider>
    );
  };
};



export default UserContext;