export const selector = ['AAPL','NVDA','GAP','NIKE','TSLA','AMD','INTC','MDB','SPCE','V','DLA','DOCU','OKTA','AMZN','PINS','TRIP','GDDY','DIS','MCD','NOK','UPWK','IBM','FB','ZM','OZON','NFLX','EA','HLT','H','CCL']

export const defaultSelector = () => {
    return selector.join()
}

export const searchSelector = (searchItem) => {
    return selector.find(el => el === searchItem)
}