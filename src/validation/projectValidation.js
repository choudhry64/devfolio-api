const { z } = require("zod");

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  skills: z.string(),
  githubUrl: z.string(),
  liveUrl: z.string(),
  startDate: z.string().date(),
  endDate: z.string().date(),
  collaborators: z.string(),
});

module.exports = projectSchema;
