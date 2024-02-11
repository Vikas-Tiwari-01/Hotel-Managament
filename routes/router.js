let express = require('express');
let router = express.Router();
let hotelApi = require('../controller/HotelApi')

router.post('/category/create', hotelApi.createCategory);

router.post('/menuitems/create', hotelApi.createMenuItems);

router.get('/items/getItemsByCategory', hotelApi.fetchItemsAsPerCategory);

module.exports = router;