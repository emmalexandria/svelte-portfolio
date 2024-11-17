export interface Post {
  title: string,
  slug: string,
  summary: string,
  image?: Image,
  date: string,
  draft?: boolean
  tags: string[]
}

export interface Image {
  src: string,
  alt: string
}

interface Rant {
  title: string,
  slug: string,
  summary: string,
  date: string,
}
