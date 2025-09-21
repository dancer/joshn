import Header from "@/components/header";

export default function Uses() {
	return (
		<div className="font-mono text-sm leading-relaxed max-w-6xl">
			<Header />

			<div className="space-y-12">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						Laptop
					</div>
					<div className="col-span-1 md:col-span-9">
						<div className="text-foreground font-medium mb-2">
							MacBook Pro 14"
						</div>
						<div className="text-muted-foreground">
							M4 Pro, 24GB RAM, 512GB SSD
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						Desktop
					</div>
					<div className="col-span-1 md:col-span-9">
						<div className="space-y-6">
							<div>
								<div className="text-foreground font-medium mb-2">
									Custom Gaming PC
								</div>
								<div className="text-muted-foreground space-y-1">
									<div>Radeon RX 9060 XT</div>
									<div>ASUS ROG Strix B650-A</div>
									<div>AMD RYZEN 7 9800X 3D</div>
									<div>HYTE Y70 Dual Chamber</div>
									<div>iCUE LINK TITAN</div>
									<div>iCUE LINK RX120 RGB 120mm</div>
									<div>NZXT C1000 Gold ATX 3.1</div>
									<div>Pro DDR5 64GB Kit</div>
									<div>Crucial P310 2TB SSD M.2 2280 NVMe PCIe Gen4</div>
									<div>Crucial P310 1TB SSD M.2 2280 NVMe PCIe Gen4</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
					<div className="col-span-1 md:col-span-3 text-muted-foreground text-sm font-medium mb-2 md:mb-0">
						Peripherals
					</div>
					<div className="col-span-1 md:col-span-9">
						<div className="space-y-4">
							<div>
								<div className="text-foreground font-medium mb-2">
									Wooting 60HE
								</div>
								<div className="text-muted-foreground">
									Hall effect switches, rapid trigger, analog input
								</div>
							</div>
							<div>
								<div className="text-foreground font-medium mb-2">
									Razer DeathAdder V3 Pro
								</div>
								<div className="text-muted-foreground">
									Wireless, Focus Pro 30K sensor, 90-hour battery
								</div>
							</div>
							<div>
								<div className="text-foreground font-medium mb-2">
									Beyerdynamic DT 990 Pro (80 Ohm)
								</div>
								<div className="text-muted-foreground">
									Open-back studio headphones, detailed sound signature
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
