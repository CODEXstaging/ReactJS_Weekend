import React from 'react';

let dataContext=React.createContext()

let DataProvider=dataContext.Provider
let DataConsumer=dataContext.Consumer

let obj={ DataProvider,DataConsumer}
export default obj
// {dataProvider:dataProvider,dataConsumer:dataConsumer}