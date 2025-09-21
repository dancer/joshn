const RESUME = {
	name: "Josh",
	avatar_path: "/me.jpg",
	bio: {
		intro: "cs student at mdx, software engineer.",
		about:
			"Passionate about creating meaningful software and exploring new technologies. I love building products that solve real problems and make people's lives better.",
	},
	experience: [
		{
			icon: (
				<svg
					aria-label="Vercel logomark"
					height="20"
					role="img"
					viewBox="0 0 74 64"
					style={{ width: "auto", overflow: "visible" }}
				>
					<path
						d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
						fill="#ffffff"
					/>
				</svg>
			),
			company: "Vercel",
			role: "Software Engineer",
			description: "",
			start_date: "2025-06-01",
			end_date: "Present",
			location: "San Francisco, CA",
			company_website: "https://vercel.com",
		},
		{
			icon: (
				<div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-mono">
					W
				</div>
			),
			company: "Warp",
			role: "AI/ML Engineer",
			description: "",
			start_date: "2024-10-01",
			end_date: "2025-03-01",
			location: "Remote",
			company_website: "https://joinwarp.com",
		},
	],
	education: {
		institution: "MDX University",
		degree: "Bachelor of Science",
		major: "Computer Science",
		start_year: "2024",
		end_year: "2026",
		location: "London, UK",
	},
	projects: [
		{
			slug: "portfolio",
			name: "Personal Portfolio",
			description:
				"A clean, minimal portfolio website built with Next.js and Tailwind CSS.",
			longDescription:
				"This portfolio showcases my work and experience with a focus on clean design and performance.",
			imagePath: "/projects/portfolio.png",
			liveUrl: "https://jos.hn",
			githubUrl: "https://github.com/josh/portfolio",
			stack: ["Next.js", "TypeScript", "TailwindCSS"],
			keyFeatures: ["Responsive design", "Clean typography", "Fast loading"],
			inProgress: false,
			year: 2024,
		},
	],
};

export default RESUME;
