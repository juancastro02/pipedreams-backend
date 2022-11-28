const fastify = require("fastify")({
  logger: true,
});
const staffRoutes = require("./routes/staff.routes");
const { checkInitialData } = require("./helpers/checkData");
require("./utils/database");

staffRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    await checkInitialData();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();