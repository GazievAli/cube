import styles from '@/app/styles/cube.module.css'
import { Cell } from '@/core/Cell'
import CubeSide from './cubeSide'

interface CubeComponentProps {
	ListCells: Cell[][]
}

export default function CubeComponent({ ListCells }: CubeComponentProps) {
	return (
		<div className={styles.cube}>
			{ListCells.map((side: Cell[], index: number) => (
				<CubeSide key={index} sideCells={side} />
			))}
		</div>
	)
}
