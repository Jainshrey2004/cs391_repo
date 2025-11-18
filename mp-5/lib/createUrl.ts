"use server";

import getCollection, { LINKS_COLLECTION } from "@/db";
import {LinkProps} from "@/types/types";

export default async function createUrl(
    url: string,
    alias: string
): Promise<LinkProps> {

    const doc = {
        url,
        alias,
        createdAt: new Date(),
    };

    const linksCollection = await getCollection(LINKS_COLLECTION);

    const existing = await linksCollection.findOne({ alias }); //check to see if alias exists

    if (existing) {
        throw new Error("Alias already exists. Please choose new one!");
    }

    const res = await linksCollection.insertOne(doc);

    if (!res.acknowledged) {
        throw new Error("Couldnt push to DB!");
    }

    return {
        url: url,
        alias: alias,
    };
}