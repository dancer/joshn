"use client";

import { useEffect, useState } from "react";
import DropdownMenu from "@/components/dropdown-menu";

export default function ClientDropdownWrapper() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="absolute left-0 top-0 w-full flex justify-center pt-16 md:pt-20 pointer-events-none z-50">
			<div className="w-full max-w-4xl px-4 md:px-16 relative">
				<div className="absolute left-5 top-12 md:left-5 md:top-12 pointer-events-auto">
					<DropdownMenu />
				</div>
			</div>
		</div>
	);
}
