"use client"

import React from "react"

function Blog() {
	return (
    <div className="flex flex-col page-width py-12">
			<h1 className="mb-12">Blog</h1>
			<div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
				<div className="w-full bg-white/10 aspect-[2]"></div>
				<div className="w-full bg-white/10 aspect-[2]"></div>
				<div className="w-full bg-white/10 aspect-[2]"></div>
				<div className="w-full bg-white/10 aspect-[2]"></div>
				<div className="w-full bg-white/10 aspect-[2]"></div>
				<div className="w-full bg-white/10 aspect-[2]"></div>
			</div>
		</div>
	)
}

export default Blog