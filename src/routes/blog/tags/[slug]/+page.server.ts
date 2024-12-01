import { error } from "@sveltejs/kit";
import type { Post } from "$lib"

export const load = async ({ fetch, params }) => {
  const response = await fetch("/api/posts");
  const unfilteredPosts: Post[] = await response.json()
  const posts = unfilteredPosts.filter((p) => {
    p.tags.forEach((t) => {
      if (t == params.slug) {
        return true
      }
    })
  })

  return {
    posts
  }
}
