import posController from './tuanList'
const tuanTpl = require('../views/tuanInit.html')
export default {
    render() {
      let compiled = _.template(tuanTpl)
      let str = compiled({})
      $(".box").html(str)
      // http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20
      posController.renderList()
    }
  }



