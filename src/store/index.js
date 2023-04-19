import {createStore} from "vuex";
import MainBodyModule from "@/store/modules/MainBodyModule";
import ModalModule from "@/store/modules/ModalModule";
import NewItemModule from "@/store/modules/NewItemModule";


const index = createStore({
    modules: {
        main: MainBodyModule,
        modal: ModalModule,
        newItem:NewItemModule,
    }
})

export default index