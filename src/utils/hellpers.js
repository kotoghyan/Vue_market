export const selector = ['AAPL','NVDA','GAP','NIKE','TSLA','AMD','INTC','MDB','SPCE','V','DLA','DOCU','OKTA','AMZN','PINS','TRIP','GDDY','DIS','MCD','NOK','UPWK','IBM','FB','ZM','OZON','NFLX','EA','HLT','H','CCL']

export const defaultSelector = () => {
    return selector.join()
}

export const searchSelector = (searchItem) => {
    return selector.find(el => el === searchItem.symbol)
}


export const removeSaveOptAndDataInStorage = (state) => {
    if (localStorage.getItem(('options')) && localStorage.getItem(('dataList'))){
        localStorage.removeItem('options')
        localStorage.removeItem('dataList')
    }
    console.log(2)
    localStorage.setItem('options', JSON.stringify(state.options))
    localStorage.setItem('dataList', JSON.stringify(state.dataList))
}

export const filterStateForLocalStorage = (localState, response)=> {
    const options = JSON.parse(localStorage.getItem(`${localState}`));
    return  options.filter((el) => {
        const index = response.data.findIndex((dataEl) => dataEl.symbol === el.symbol);
        return index === -1;
    });
}
