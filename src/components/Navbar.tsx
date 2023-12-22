"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"
import AKNavLogo from "./AKNavLogo"

const NAVITEMS = [
	{
		label: "Projects",
		link: "/projects",
	},
	{
		label: "Blog",
		link: "/blog",
	},
	{
		label: "Resume",
		link: "/resume",
	},
]


function Navbar() {
	const [navOpen, setNavOpen] = useState(false)
  const [current, setCurrent] = useState("");
	const pathname = usePathname()

	function NavLink(
		{label, link, active}: {label: string, link?: string, active: boolean}
	) {
		return (
			<Link href={link || "/" + label.toLowerCase()} onClick={() => setNavOpen(false)} className="w-full">
				<span className={`nav-link ${active ? "active" : ""}`}>
					{label}
				</span>
			</Link>
		)
	}

	useEffect(() => {
		setCurrent(pathname.split("/")[1])
	}, [pathname])

	return (
		<nav className="bg-primary-800/80 flex flex-col inset-x-0 backdrop-blur border-primary-100/25 fixed top-0">
			<div className="flex flex-row items-center justify-between h-[60px] page-width">
				{/* Logotype */}
				<Link href="/">
					<span className="text-2xl text-white/80 hover:text-white/95 cursor-pointer transition-colors ease-out duration-250">
						<AKNavLogo />
					</span>
				</Link>

				{/* Desktop Nav Links */}
				<div className="flex flex-row gap-x-3 items-center max-sm:hidden">
					{NAVITEMS.map(({label,link},i) => <NavLink label={label} link={link} key={i} active={link.slice(1) == current}/>)}
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
				{NAVITEMS.map(({label,link},i) => <NavLink label={label} link={link} key={i} active={link.slice(1) == current}/>)}
			</div>
			)}
		</nav>
	)
}

export default Navbar