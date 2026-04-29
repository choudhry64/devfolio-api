const { z } = require("zod");

const skillSchema = z.object({
    name : z.string(),
    category : z.string()
})

module.exports = skillSchema;