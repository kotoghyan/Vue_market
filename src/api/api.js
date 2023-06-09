import axios from 'axios';
import {defaultSelector, searchSelector} from "@/utils/hellpers";

const apikey = 'c885b15df56dafb35cc6e49ccd5538a1';
const baseURL = 'https://financialmodelingprep.com/api/v3';

const instance = axios.create({
    baseURL: baseURL,
    params: {
        apikey: apikey
    }
});

export const setApiData = {
    setDefaultData() {
        return instance.get(`/profile/${defaultSelector()}`)
            .then(res => res)
            .catch(err => console.log(err))
    },
    setOptions(symbol) {
        return instance.get(`/profile/${searchSelector(symbol)}`)
            .then(res => res)
            .catch(err => console.error(err))
    },
    setSearchItem(symbol){
        return instance.get(`/profile/${searchSelector(symbol)}`)
            .then(res => res)
            .catch(err => console.error(err))
    }

}


// https://financialmodelingprep.com/api/v3/profile/${defaultSelector()}?apikey=13b4101a0776a996190f6521a566f207`