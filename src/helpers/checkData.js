const Staff = require('../models/staff.model')
const waitersDocument = require('../documents/waiters.json')
const cooksDocument = require('../documents/cooks.json')

const checkInitialData = async () => {
  
  try {
    const staffs = await Staff.find();
    const staffDocuments = [waitersDocument,cooksDocument];
    if (staffs.length === 0){
      staffDocuments.forEach( async (document) => {
        const staff = new Staff(document);
        await staff.save();
      });
    };
  } catch (error) {
    console.log(error)
  }

};

module.exports = {
  checkInitialData
};