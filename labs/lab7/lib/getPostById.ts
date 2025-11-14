import getCollection, { POSTS_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import { PostProps } from "@/types/PostProps"

export default async function getPostById(id: string,): Promise<PostProps | null> {
    const postsCollection = await getCollection(POSTS_COLLECTION);

    let objectId;

    try {
        objectId = new ObjectId(id);
    } catch {
        return null;
    }

    const data = await postsCollection.findOne({ _id: objectId });

    if (!data) return null;

    return {
        id: id,
        title: data.title,
        content: data.content,
        upvotes: data.upvotes,
        downvotes: data.downvotes,
    };
}