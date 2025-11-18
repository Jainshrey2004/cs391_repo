import { redirect } from "next/navigation";
import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function AliasPage({params,}: { params: Promise<{ alias: string }>; }) {
    const { alias } = await params;

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const doc = await linksCollection.findOne({ alias });

    if (!doc) {
        return (
            <div className="text-center flex items-center justify-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">Shortened URL not found</p>
                <a href="/" className="text-blue-600 hover:underline">Create a new shortened URL</a>
        </div>
    );
    }
    const targetUrl = String(doc.url);
    redirect(targetUrl);}


