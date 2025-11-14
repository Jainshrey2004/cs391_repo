import {PostProps} from "@/types/PostProps";
import Link from "next/link";
import styled from 'styled-components';



const StyledDiv = styled.div`
    width: 15vw;
    margin: 1%;
    border: 5px solid black;
    background-color: burlywood;
    color: red;
    padding: 1%`;

export default function PostPreview({post} : {post: PostProps}) {
    return (
        <Link href={`/post/${post.id}`}>
            <StyledDiv>
                <h4>{post.title}</h4>
                <p>
                    {
                        post.upvotes-post.downvotes
                    }
                </p>
            </StyledDiv>
        </Link>
    )

}