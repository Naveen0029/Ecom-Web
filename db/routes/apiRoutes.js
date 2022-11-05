const router = require("express").Router();
const {getProduct, searchProducts} = require('../controllers/apiController');

router.get("/product",getProduct);
router.get("/search",searchProducts);

module.exports = router;