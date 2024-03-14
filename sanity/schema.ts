import { type SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import social from "./social";
import post from "./post";
import skill from "./skill";
import project from "./project";
import blockContent from "./blockContent";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, category, social, post, skill, project, blockContent],
};
