const { z } = require("zod");

const skillSchema = z.object({
    name : z.string().min(4).max(10),
    category : z.string().optional()
})

module.exports = skillSchema;