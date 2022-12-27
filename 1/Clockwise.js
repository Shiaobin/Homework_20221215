class Clockwise {
    constructor(size) {
        this.size = size
        this.array = new Array(size)
        for (let i = 0; i < size; ++i) {
            this.array[i] = new Array(size)
        }
        this.fill()
    }

    isFull() {
        let result = true

        for (let i = 0; i < this.size; ++i) {
            if (this.array[i].includes(undefined)) {
                result = false
            }
        }

        return result
    }

    fill() {
        let i = 0
        let j = 0
        let index = 0
        let direction = 'e'

        while (!this.isFull()) {
            this.array[i][j] = ++index
            switch (direction) {
                case 'e': {
                    if (j + 1 >= this.size || typeof this.array[i][j + 1] !== 'undefined') {
                        ++i
                        direction = 's'
                    } else {
                        ++j
                    }
                    break
                }
                case 's': {
                    if (i + 1 >= this.size || typeof this.array[i + 1][j] !== 'undefined') {
                        --j
                        direction = 'w'
                    } else {
                        ++i
                    }
                    break
                }
                case 'w': {
                    if (j - 1 < 0 || typeof this.array[i][j - 1] !== 'undefined') {
                        --i
                        direction = 'n'

                    } else {
                        --j
                    }
                    break
                }
                case 'n': {
                    if (i - 1 < 0 || typeof this.array[i - 1][j] !== 'undefined') {
                        ++j
                        direction = 'e'
                    } else {
                        --i
                    }
                    break
                }
            }
        }
    }

    toString() {
        return this.array.map(e => e.join(' ')).join('\n')
    }
}

const size = parseInt(process.argv[2], 10)
if (size > 0) {
    console.log(new Clockwise(size).toString())
}
