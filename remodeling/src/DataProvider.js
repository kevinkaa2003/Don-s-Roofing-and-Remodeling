import React, { createContext, useContext, useState, useEffect } from 'react';

//Create Context
export const DataContext = createContext();


//Create Provider Element
export const DataProvider = ({children}) => {


    const values= {
        //Add data to be passed down here
    }


    return (<DataContext.Provider value ={values}>{/*Pass States to Children*/}
                {children}
            </DataContext.Provider>
    );
};
