"use client";

import { ChevronDown, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export default function DropdownMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	if (!mounted) return null;

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				className={cn(
					"relative w-5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
					theme === "dark" ? "bg-zinc-800/50" : "bg-zinc-200/50",
					"backdrop-blur-sm border border-border/20",
					isOpen ? "h-16 rounded-full" : "h-5 rounded-full",
				)}
			>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={cn(
						"absolute inset-0 h-5 w-5 rounded-full grid place-items-center",
						"transition-all duration-500 ease-out z-10",
						"text-muted-foreground hover:text-foreground",
					)}
					aria-label="Menu"
					type="button"
				>
					<ChevronDown
						size={10}
						className={cn(
							"transition-transform duration-500 -ml-0.5",
							isOpen && "rotate-180",
						)}
					/>
				</button>

				<div
					className={cn(
						"absolute bottom-0 left-1/2 -translate-x-1/2",
						"transition-all duration-500 ease-out",
						isOpen
							? "translate-y-0 opacity-100 delay-200"
							: "-translate-y-full opacity-0",
					)}
				>
					<button
						onClick={toggleTheme}
						className={cn(
							"w-5 h-5 mb-0 relative",
							"flex items-center justify-center rounded-full",
							"transition-all duration-300",
							"hover:scale-110",
						)}
						aria-label={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
						type="button"
					>
						{theme === "dark" && isOpen && (
							<>
								<div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl animate-pulse" />
								<div className="absolute inset-0 rounded-full bg-yellow-300/10 blur-lg animate-pulse animation-delay-100" />
								<div className="absolute inset-0 -inset-2 rounded-full bg-gradient-radial from-yellow-400/30 via-yellow-400/10 to-transparent animate-glow" />
							</>
						)}
						{theme === "light" && isOpen && (
							<>
								<div className="absolute inset-0 rounded-full bg-blue-400/10 blur-xl animate-pulse" />
								<div className="absolute inset-0 rounded-full bg-indigo-300/10 blur-lg animate-pulse animation-delay-100" />
								<div className="absolute inset-0 -inset-2 rounded-full bg-gradient-radial from-blue-400/20 via-indigo-400/10 to-transparent animate-moon-pulse" />
								<div className="absolute -inset-4 transition-opacity duration-500">
									<div className="absolute top-0 left-2 w-0.5 h-0.5 bg-blue-400 rounded-full" />
									<div className="absolute top-3 right-1 w-0.5 h-0.5 bg-blue-500 rounded-full" />
									<div className="absolute bottom-2 left-1 w-0.5 h-0.5 bg-blue-600 rounded-full" />
									<div className="absolute bottom-0 right-2 w-0.5 h-0.5 bg-blue-400 rounded-full" />
									<div className="absolute top-1 right-3 w-px h-px bg-blue-300 rounded-full" />
									<div className="absolute bottom-3 left-3 w-px h-px bg-blue-500 rounded-full" />
								</div>
							</>
						)}
						<div className="transition-transform duration-500 hover:rotate-180 relative z-10">
							{theme === "dark" ? (
								<Sun
									size={10}
									className={cn(
										"transition-all duration-500",
										isOpen
											? "text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]"
											: "text-zinc-300",
									)}
								/>
							) : (
								<Moon
									size={10}
									className={cn(
										"transition-all duration-500",
										isOpen
											? "text-blue-600 drop-shadow-[0_0_6px_rgba(37,99,235,0.6)]"
											: "text-zinc-700",
										isOpen && "animate-moon-glow",
									)}
								/>
							)}
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
