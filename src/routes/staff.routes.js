const controllers = require("../controllers/staff.controller");
const { staffSchema } = require("../schemas/swaggerSchemas");

const staffRoutes = async (fastify) => {

  fastify.get('/Cooks', staffSchema , controllers.getCooks)
  fastify.get('/Waiters', staffSchema , controllers.getWaiters)

}

module.exports = staffRoutes;