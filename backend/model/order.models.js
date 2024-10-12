
const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/order.schemas.js");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };
