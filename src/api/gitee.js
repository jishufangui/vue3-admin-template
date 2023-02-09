import { requestA } from '@/utils/request'

const getVue3AdminTemplate = (data) => {
  return requestA({
    method: 'get',
    url: '/vue3-admin-template/raw/master/README.md',
    data
  })
}

export default {
  getVue3AdminTemplate
}
