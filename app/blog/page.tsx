import Header from "@/components/header";
import Link from "next/link";

const posts = [
	{
		title: "how i accidentally joined vercel",
		date: "2025-01-01",
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
					<article key={post.slug} className="grid grid-cols-12 gap-16">
						<div className="col-span-3 text-muted-foreground text-sm">
							<div>
								{new Date(post.date).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
								})}
							</div>
							<div className="mt-1">{post.readTime}</div>
						</div>
						<div className="col-span-9">
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
