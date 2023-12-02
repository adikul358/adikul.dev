"use client"

import React, { useState } from "react"
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa"
import AKNavLogo from "./AKNavLogo"

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
	const [navOpen, setNavOpen] = useState(false)

	return (
		<nav className="bg-primary-800/80 border-b flex flex-col inset-x-0 backdrop-blur border-primary-100/25 fixed top-0">
			<div className="flex flex-row items-center justify-between h-[60px] page-width">
				{/* Logotype */}
				<Link href="/">
					<span className="text-xl text-white/70 hover:text-white/95 cursor-pointer transition-colors ease-out duration-250">
						<AKNavLogo />
					</span>
				</Link>

				{/* Desktop Nav Links */}
				<div className="flex flex-row gap-x-6 items-center max-sm:hidden">
					<NavLink label="Projects" />
					<NavLink label="Blog" />
					<NavLink label="Resume" link="/Aditya Kulshrestha – Resume.pdf" />
				</div>

				{/* Mobile Nav Button */}
				<div 
					className="w-[36px] h-[36px] flex justify-center items-center bg-white/20 sm:hidden text-white/80 cursor-pointer hover:bg-white/30" 
					onClick={_ => setNavOpen(!navOpen)}
				>
					{navOpen ? <FaTimes/> : <FaBars />}
				</div>
			</div>
			{navOpen && (
			<div className="flex flex-col gap-y-4 sm:hidden page-width pb-6">
				<NavLink label="Projects" />
				<NavLink label="Blog" />
				<NavLink label="Resume" link="/Aditya Kulshrestha – Resume.pdf" />
			</div>
			)}
		</nav>
	)
}

export default Navbar