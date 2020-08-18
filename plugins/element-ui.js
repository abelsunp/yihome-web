import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(Element, { locale });



/* import Vue from 'vue'
import Element from 'element-ui'
export default ({
  app
}) => {
  Vue.use(Element, {
    i18n: (key, value) => app.i18n.t(key, value)
  })
} */
