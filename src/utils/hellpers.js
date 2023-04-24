export const selector = ['AAPL', 'NVDA', 'GAP', 'NIKE', 'TSLA', 'AMD', 'INTC', 'MDB', 'SPCE', 'V', 'DLA', 'DOCU', 'OKTA', 'AMZN', 'PINS', 'TRIP', 'GDDY', 'DIS', 'MCD', 'NOK', 'UPWK', 'IBM', 'FB', 'ZM', 'OZON', 'NFLX', 'EA', 'HLT', 'H', 'CCL']

export const defaultSelector = () => {
	return selector.join()
}

export const searchSelector = (searchItem) => {
	return selector.find(el => el === searchItem.symbol)
}


export const removeSaveOptAndDataInStorage = ({options, dataList}) => {
	if (localStorage.getItem(('options')) && localStorage.getItem(('dataList'))) {
		removeItemFromLocalStorage('options')
		removeItemFromLocalStorage('dataList')
	}
	setItemToLocalStorage('options', options)
	setItemToLocalStorage('dataList', dataList)

}

export const filterStateForLocalStorage = (localState, response) => {
	const options = JSON.parse(localStorage.getItem(`${localState}`));
	return options.filter((el) => {
		const index = response.data.findIndex((dataEl) => dataEl.symbol === el.symbol);
		return index === -1;
	});
}


export const getItemFromLocalsStorage = (item) => {
	return JSON.parse(localStorage.getItem(`${item}`))
}
export const setItemToLocalStorage = (item, state) => {
	return localStorage.setItem(`${item}`, JSON.stringify(state))
}
export const removeItemFromLocalStorage = (item) => {
	return localStorage.removeItem(`${item}`);
}