import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const title = searchParams.get("title");
		const description =
			searchParams.get("description") ||
			"cs student at mdx, software engineer.";

		return new ImageResponse(
			<div
				style={{
					display: "flex",
					height: "100%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					letterSpacing: "-.02em",
					fontWeight: 700,
					background: "white",
					fontFamily:
						'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
				}}
			>
				{title && (
					<div
						style={{
							left: 42,
							top: 42,
							position: "absolute",
							display: "flex",
							alignItems: "center",
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 16 16"
							fill="none"
							style={{ color: "black" }}
							role="img"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 1L16 15H0L8 1Z"
								fill="currentColor"
							/>
						</svg>
					</div>
				)}

				{title ? (
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							padding: "30px 60px",
							margin: "0 42px",
							fontSize: 36,
							width: "auto",
							maxWidth: 700,
							textAlign: "center",
							backgroundColor: "white",
							color: "black",
							lineHeight: 1.4,
						}}
					>
						{title}
					</div>
				) : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								fontSize: 20,
								color: "#666666",
								textAlign: "center",
								letterSpacing: "0.02em",
							}}
						>
							{description}
						</div>

						<div
							style={{
								display: "flex",
								gap: "8px",
								marginTop: "40px",
							}}
						>
							<div
								style={{
									width: "6px",
									height: "6px",
									backgroundColor: "black",
									borderRadius: "50%",
								}}
							/>
							<div
								style={{
									width: "6px",
									height: "6px",
									backgroundColor: "#666666",
									borderRadius: "50%",
								}}
							/>
							<div
								style={{
									width: "6px",
									height: "6px",
									backgroundColor: "#cccccc",
									borderRadius: "50%",
								}}
							/>
						</div>
					</div>
				)}
			</div>,
			{
				width: 1200,
				height: 630,
			},
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
