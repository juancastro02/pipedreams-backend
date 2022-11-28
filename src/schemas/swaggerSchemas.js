const staffSchema = {
  schema: {
    description: '[ Get ] Returns staff data',
    tags: ['staff'],
    response: {
      200: {
        description: 'Success response and schema description',
        type: 'object',
        properties: {
          type: { type: 'string' },
          monday: { type: 'array' },
          tuesday: { type: 'array' },
          wednesday: { type: 'array' },
          thursday: { type: 'array' },
          friday: { type: 'array' }
        }
      }
    } 
  }
}

module.exports = {
  staffSchema
}