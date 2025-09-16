import { Cell } from './Cell'
import { Colors } from './Colors'

export class Cube {
	public generateAssembledCube() {
		let cells: Array<Cell> = []

		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 3; j++) {
				for (let k = 0; k < 3; k++) {
					let cell: Cell = new Cell()
					cell.setColor(Colors[i])
					cell.setZ(i)
					cell.setY(j)
					cell.setX(k)
					cells.push(cell)
				}
			}
		}

		return cells
	}

	private changeCellInCube(cell: Cell) {}
}
