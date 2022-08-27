import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
	const [show, setShow] = useState(false)
	const linkContainerRef = useRef(null)
	const linkRef = useRef(null)
	useEffect(() => {
		const linksHeight = linkRef.current.getBoundingClientRect().height
		if (show) {
			linkContainerRef.current.style.height = `${linksHeight}px`
		} else {
			linkContainerRef.current.style.height = '0px'
		}
	}, [show])
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button
						className='nav-toggle'
						onClick={() => {
							setShow(!show)
						}}
					>
						<FaBars />
					</button>
				</div>
				<div
					className={`${
						show ? 'links-container show-container' : 'links-container'
					}`}
					ref={linkContainerRef}
				>
					<ul className='links' ref={linkRef}>
						<li>
							<a href='#'>home</a>
						</li>
						<li>
							<a href='#'>about</a>
						</li>
						<li>
							<a href='#'>contact</a>
						</li>
						<li>
							<a href='#'>products</a>
						</li>
					</ul>
				</div>
				<ul className='social-icons'>
					<li>
						<a href='https://www.twitter.com'>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com'>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com'>
							<FaTwitter />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
