import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "l3kivww3",
  dataset: "production",
  apiVersion: "2026-04-25",
  useCdn: false,
});

export type Treatment = {
  _id: string;
  title: string;
  category: "botox" | "fillers" | "medical";
  price?: number;
  discountPrice?: number;
  campaignText?: string;
  active?: boolean;
  description?: string;
};

export async function getTreatments(): Promise<Treatment[]> {
  return sanityClient.fetch(`
    *[_type == "treatment" && active == true] | order(category asc, title asc) {
      _id,
      title,
      category,
      price,
      discountPrice,
      campaignText,
      active,
      description
    }
  `);
}