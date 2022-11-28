const Staff = require('../models/staff.model')

const getCooks = async (req, reply) => {
  try {
    const cooks = await Staff.findOne({type: 'cooks'})
    reply.code(200).send(cooks);
  } catch (err) {
    reply.code(500).send(err)
  }
};

const getWaiters = async (req, reply) => {
    try {
      const waiters = await Staff.findOne({type: 'waiters'});
      reply.code(200).send(waiters);
    } catch (err) {
      reply.code(500).send(err)
    }
  };


module.exports = {
  getCooks,
  getWaiters
};