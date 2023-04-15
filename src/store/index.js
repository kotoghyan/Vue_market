import {createStore} from "vuex";
import MainBodyModule from "@/store/MainBodyModule";
import ModalModule from "@/store/ModalModule";


const index = createStore({
    modules: {
        main: MainBodyModule,
        modal: ModalModule,
    }
})


export default index