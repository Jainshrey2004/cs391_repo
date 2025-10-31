import mockData from "@/mock.json"
import { PostProps } from "@/types/PostProps"

export default async function getAllPosts(): Promise<PostProps[]> {
  return mockData.mockPosts;
}