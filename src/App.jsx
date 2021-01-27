import { useState, useEffect } from 'react'
import styles from './styles/App.module.css'

const api = {
	development: 'http://localhost:4500/',
	production: 'https://finalspaceapi.com/api/v0/character'
}

export default function App() {
	const [data, setData] = useState([])
	const fetchHandler = async url => {
		try {
			setData(await fetch(url).then(res => res.json()))
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		fetchHandler(api.development)
	}, [])
	return (
		<main>
			<section className={styles.grid}>
				{data.map(({ id, name, gender, origin, status, img_url }) => {
					return (
						<article key={id}>
							<img src={img_url} alt={name} />
							<div>
								<h2>{name}</h2>
								<span>Status: {status}</span>
								<span>Gender: {gender}</span>
								<span>Origin: {origin}</span>
							</div>
						</article>
					)
				})}
			</section>
		</main>
	)
}
