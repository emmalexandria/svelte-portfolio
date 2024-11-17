import { error } from "@sveltejs/kit";
import type { ServerLoadEvent } from "@sveltejs/kit";

console.log("Hello")

export const load = async ({ params }: ServerLoadEvent) => {
  console.log(params.slug)
  try {
    const post = await import(`../../../../posts/${params.slug}.md`)
    console.log(`../../../../${params.slug}.md`)

    return {
      content: post.default,
      meta: post.metadata,
    }
  }
  catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
