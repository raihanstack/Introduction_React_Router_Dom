import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const { postId } = useParams();
    const post = useLoaderData();

    return (
        <div>
            <h1>This Post Details Page</h1>
            <p>Post ID: {postId}</p>
                <div>
                    <h2>Post Title - {post.title}</h2>
                    <p><strong>Post Description -</strong> {post.body}</p>
                </div>
        </div>
    );
};

export default PostDetails;