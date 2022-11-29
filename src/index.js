const fastify = require("fastify")({
  logger: true,
});
require("./utils/database");

const cors = require('fastify-cors')

const swagger = require("./utils/swagger");

// Import of the document validation function
const { checkInitialData } = require("./helpers/checkData");

// using swagger and putting the configuration
fastify.register(require("fastify-swagger"), swagger.options);

fastify.register(cors)

// Staff routes imports
fastify.register(require('./routes/staff.routes'));

const start = async () => {
  try {
    await fastify.listen(3000);
    await checkInitialData();
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();