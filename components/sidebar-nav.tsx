"use client";

import { FolderGit2, Github, House, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
	name: string;
	icon: React.ReactNode;
	href: string;
}

const navItems: NavItem[] = [
	{ name: "home", icon: <House size={16} />, href: "/" },
	{ name: "about", icon: <User size={16} />, href: "/about" },
	{ name: "projects", icon: <FolderGit2 size={16} />, href: "/projects" },
];

const socialLinks = [
	{
		name: "email",
		icon: <Mail size={16} />,
		href: "mailto:josh@afterima.ge",
	},
	{
		name: "github",
		icon: <Github size={16} />,
		href: "https://github.com/dancer",
	},
];

export default function SidebarNav() {
	const pathname = usePathname();

	return (
		<div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-3">
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 group",
									isActive
										? "bg-foreground text-background"
										: "text-muted-foreground hover:text-foreground hover:bg-card/50",
								)}
							>
								{item.icon}
							</Link>
						);
					})}
				</div>

				<div className="w-px h-6 bg-border/30 mx-auto" />

				<div className="flex flex-col gap-3">
					{socialLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all duration-200"
						>
							{link.icon}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
