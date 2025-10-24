import PostPreview from "@/components/PostPreview";
export default function Home() {
  return (
    <div>
        <PostPreview
            post={
                {
                    id:"id",
                    title:"Post Title",
                    content:"bhcdscb",
                    upvotes:5,
                    downvotes:5
                }
            }
        />
    </div>
  )
}
