import Link from "next/link";
import RESUME from "@/data/resume";

export default function Header() {
	return (
		<div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-border/30 pb-6 mb-12">
			<div className="flex justify-between items-start md:items-end mb-4 md:mb-0">
				<div>
					<h1 className="text-sm font-bold mb-3">
						{RESUME.name.toLowerCase()}
					</h1>
					<nav className="flex flex-wrap gap-2 md:gap-4 text-muted-foreground text-sm">
						<Link href="/" className="hover:text-foreground transition-colors">
							home
						</Link>
						<Link
							href="/blog"
							className="hover:text-foreground transition-colors"
						>
							blog
						</Link>
						<Link
							href="/uses"
							className="hover:text-foreground transition-colors"
						>
							uses
						</Link>
						<span className="text-border/50 hidden md:inline">|</span>
						<Link
							href="mailto:josh@afterima.ge"
							className="hover:text-foreground transition-colors"
						>
							email
						</Link>
						<Link
							href="https://github.com/dancer"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-foreground transition-colors"
						>
							github
						</Link>
					</nav>
				</div>
				<div className="text-muted-foreground text-sm md:hidden">
					London / SF
				</div>
			</div>
			<div className="text-muted-foreground text-sm hidden md:block">
				London / SF
			</div>
		</div>
	);
}
