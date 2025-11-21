import { CollectionConfig } from "payload";
import { PartnersBlock } from "./partners-block_old";

export const PartnersCollection: CollectionConfig = {
  slug: "partners",
  labels: {
    singular: "Секция партньори",
    plural: "Секции партньори",
  },
  fields: [
    {
      name: "partners",
      type: "blocks",
      blocks: [PartnersBlock],
      maxRows: 1,
      required: true,
    },
  ],
};
