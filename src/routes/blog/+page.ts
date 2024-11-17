import { allPosts } from "content-collections"

export function load() {
  return {
    posts: allPosts
  }
}
