import { Cell } from '@/core/Cell'
import { Cube } from '@/core/Cube'
import CubeComponent from './components/cube'
import styles from './styles/home.module.css'

export default function Home() {
	let cube: Cube = new Cube()
	let outList: Array<Cell> = cube.generateAssembledCube()
	const sides: Cell[][] = []

	for (let i = 0; i < 6; i++) {
		sides.push(outList.slice(i * 9, (i + 1) * 9))
	}

	return (
		<div className={styles.home}>
			<CubeComponent ListCells={sides} />
		</div>
	)
}
