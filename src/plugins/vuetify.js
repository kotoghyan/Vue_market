import { createVuetify } from 'vuetify';
import VuetifyComponents from 'vuetify-components'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
    VuetifyComponents,
    components,
    directives,
})