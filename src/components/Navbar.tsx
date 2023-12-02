import React from "react"
import Link from "next/link"

function NavLink(
	{label, link}: {label: string, link?: string}
) {
	return (
		<Link href={link || "/" + label.toLowerCase()}>
			<span className="nav-link">
				{label}
			</span>
		</Link>
	)
}

function Navbar() {
	return (
		<nav className="bg-primary-700/80 border-b backdrop-blur border-primary-100/25 sticky top-0">
			<div className="flex flex-row items-center justify-between h-[60px] max-w-5xl mx-auto">
				{/* Logotype */}
				<Link href="/">
					<span className="text-xl font-semibold font-display text-white/80 hover:text-white/95 cursor-pointer transition-colors ease-out duration-250">
						Aditya Kulshrestha
					</span>
				</Link>

				{/* Nav Links */}
				<div className="flex flex-row gap-x-6 items-center uppercase">
					<NavLink label="Projects" />
					<NavLink label="Blog" />
					<NavLink label="Resume" link="/Aditya Kulshrestha – Resume.pdf" />
				</div>
			</div>
		</nav>
	)
}

export default Navbar