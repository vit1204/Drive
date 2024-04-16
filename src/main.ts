import { createApp } from 'vue'

import Root from './Root.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)
const app = createApp(Root)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('font-awesome-icon', FontAwesomeIcon)

router.isReady().then(() => {
  app.mount('#root')
})
