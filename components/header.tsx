
import Link from "next/link";
import RESUME from "@/data/resume";

export default function Header() {
	return (
		<div className="flex justify-between items-end border-b border-border/30 pb-6 mb-12">
			<div>
				<h1 className="text-sm font-bold mb-3">{RESUME.name.toLowerCase()}</h1>
				<nav className="flex gap-4 text-muted-foreground">
					<Link href="/" className="hover:text-foreground transition-colors">
						home
					</Link>
					<Link href="/blog" className="hover:text-foreground transition-colors">
						blog
					</Link>
					<Link href="/uses" className="hover:text-foreground transition-colors">
						uses
					</Link>
					<span className="text-border/50">|</span>
					<Link href="mailto:josh@afterima.ge" className="hover:text-foreground transition-colors">
						email
					</Link>
					<Link href="https://github.com/dancer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
						github
					</Link>
				</nav>
			</div>
			<div className="text-muted-foreground">
				London / SF
			</div>
		</div>
	);
}
