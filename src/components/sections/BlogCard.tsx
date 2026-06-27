import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { MediaImage } from "@/components/ui/MediaImage";
import { Icon } from "@/components/ui/Icon";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5">
      <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden">
        <MediaImage
          id={post.image}
          alt={post.title}
          ratio="3 / 2"
          sizes="(max-width: 768px) 100vw, 33vw"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur-sm">
          {post.category.replace(/^Case Studies\s*\/\s*/i, "")}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-800">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-800">
          Read more
          <Icon name="ArrowUpRight" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}
