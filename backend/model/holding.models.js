
const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/holding.schemas.js");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
