import Link from "next/link";
import Header from "@/components/header";

const posts = [
	{
		title: "how i accidentally joined vercel",
		date: "2025-09-22",
		slug: "vercel",
		description:
			"from a random hello at v0 summit to building the future of ai development tools.",
		readTime: "12 min read",
	},
];

export default function Blog() {
	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-8">
				{posts.map((post) => (
					<article
						key={post.slug}
						className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16"
					>
						<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
							<div>
								{new Date(post.date).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
								})}
							</div>
							<div className="mt-1">{post.readTime}</div>
						</div>
						<div className="col-span-1 md:col-span-9">
							<h2 className="text-foreground font-medium mb-2">
								<Link
									href={`/blog/${post.slug}`}
									className="hover:underline underline-offset-4"
								>
									{post.title}
								</Link>
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{post.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
