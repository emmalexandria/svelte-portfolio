import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`$src/posts/${params.slug}.md`)

    console.log(post)

    return {
      content: post.default,
      meta: post.metadata,
    }
  }
  catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
