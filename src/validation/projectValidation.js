const { z } = require("zod");

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  skills: z.array(z.string().optional),
  githubUrl: z.string(),
  liveUrl: z.string().optional(),
  startDate: z.string().date(),
  endDate: z.string().date().optional(),
  collaborators: z.array(z.string().optional()),
});

module.exports = projectSchema;
