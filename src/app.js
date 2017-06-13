/**
 * Created by yangbing5 on 2017/5/24.
 */

import('moment')
    .then(moment=>moment().format('yyyy-mm-dd'))
    .then(str=>console.log(str));