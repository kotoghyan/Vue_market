import {createStore} from "vuex";
import MainBodyModule from "@/store/MainBodyModule";


const index = createStore({
    modules: {
        main:MainBodyModule,
    }

})


export default index