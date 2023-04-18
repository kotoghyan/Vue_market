import {createStore} from "vuex";
import MainBodyModule from "@/store/modules/MainBodyModule";
import ModalModule from "@/store/modules/ModalModule";


const index = createStore({
    modules: {
        main: MainBodyModule,
        modal: ModalModule,
    }
})

export default index