import type { Metadata } from "next";
import "./globals.css";
import ClientDropdownWrapper from "@/components/client-dropdown-wrapper";
import { ThemeProvider } from "@/contexts/theme-context";

export const metadata: Metadata = {
	title: "josh",
	description: "cs student at mdx, software engineer.",
	metadataBase: new URL("https://jos.hn"),
	openGraph: {
		description: "cs student at mdx, software engineer.",
		images: [
			{
				url: "/api/og?description=cs%20student%20at%20mdx%2C%20software%20engineer.",
				width: 1200,
				height: 630,
				alt: "cs student at mdx, software engineer.",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		description: "cs student at mdx, software engineer.",
		images: [
			"/api/og?description=cs%20student%20at%20mdx%2C%20software%20engineer.",
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased font-mono">
				<ThemeProvider>
					<ClientDropdownWrapper />
					<main className="min-h-screen flex items-start justify-center pt-16 md:pt-20 relative">
						<div className="w-full max-w-4xl px-4 md:px-16 py-8 md:py-12">
							{children}
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
