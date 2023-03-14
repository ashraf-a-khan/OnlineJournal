import { previewData } from "next/headers";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";

import { groq } from "next-sanity";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";

export const revalidate = 30; // revalidate this page every 30 seconds

const query = groq`*[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
 `;

export default async function HomePage() {
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
                            Loading Preview Data...
                        </p>
                    </div>
                }
            >
                <PreviewBlogList query={query} />
            </PreviewSuspense>
        );
    }

    const posts = await client.fetch(query);

    return <BlogList posts={posts} />;
}
