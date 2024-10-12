const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/position.schemas.js");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };