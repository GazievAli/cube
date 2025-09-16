export class Cell {
	private color: String = 'None'
	private x: number = 0
	private y: number = 0
	private z: number = 0

	getColor() {
		return this.color
	}

	getX() {
		return this.x
	}

	getY() {
		return this.y
	}

	getZ() {
		return this.z
	}

	setColor(color: String) {
		this.color = color
	}

	setX(x: number) {
		this.x = x
	}

	setY(y: number) {
		this.y = y
	}

	setZ(z: number) {
		this.z = z
	}
}
