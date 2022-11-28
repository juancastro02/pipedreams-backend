const controllers = require("../controllers/staff.controller");

const routes = [{
  method: "GET",
  url: "/Cooks",
  handler: controllers.getCooks,
}, {
  method: "GET",
  url: "/Waiters",
  handler: controllers.getWaiters,
}];

module.exports = routes;