import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { MediaImage } from "@/components/ui/MediaImage";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col border border-line bg-surface">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <MediaImage
          id={post.image}
          alt={post.title}
          ratio="3 / 2"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-muted">{post.category.replace(/^Case Studies\s*\/\s*/i, "")}</p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-800">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-medium text-brand-800 hover:underline">
          Read the case study →
        </Link>
      </div>
    </article>
  );
}
