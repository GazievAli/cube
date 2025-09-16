import { Cell } from '@/core/Cell'
import { Cube } from '@/core/Cube'

export default function Home() {
	let cube: Cube = new Cube()
	let outList: Array<Cell> = cube.generateAssembledCube()

	return (
		<div className='Home'>
			{outList.map((el, index) => (
				<p key={index}>
					{el.getColor()} : {el.getZ()} : {el.getX()} : {el.getY()}
				</p>
			))}
		</div>
	)
}
