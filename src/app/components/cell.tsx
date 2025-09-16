import { Cell } from '@/core/Cell'

interface CellComponentProps {
	cell: Cell
}

export default function CellComponent({ cell }: CellComponentProps) {
	return (
		<div className='Cell'>
			{cell.getColor()}: {cell.getX()} {cell.getY()} {cell.getZ()}
		</div>
	)
}
