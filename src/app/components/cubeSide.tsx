import styles from '@/app/styles/side.module.css'
import { Cell } from '@/core/Cell'
import CellComponent from './cell'

interface CubeSideComponentProps {
	sideCells: Cell[]
}

export default function CubeSide({ sideCells }: CubeSideComponentProps) {
	return (
		<div className={styles.side}>
			{sideCells.map((cell: Cell, index: number) => (
				<CellComponent key={index} cell={cell} />
			))}
		</div>
	)
}
