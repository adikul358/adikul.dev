"use client"

import React from 'react'

function Resume() {
	return (
    <div className="flex flex-col page-width py-12">
			<h1>Resume</h1>
			{/* <embed src="/Aditya Kulshrestha – Resume.pdf" type="application/pdf" className="aspect-[0.707]" /> */}
			<iframe src="/Aditya Kulshrestha – Resume.pdf#view=fitH" className="aspect-[0.707]"></iframe>
		</div>
	)
}

export default Resume