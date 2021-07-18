class Algorithmer {
    constructor(grid, start, target) {
        this.grid = grid;
        this.start = {
            x: Number(start.style.gridRowStart),
            y: Number(start.style.gridColumnStart)
        }
        this.target = {
            x: Number(target.style.gridRowStart),
            y: Number(target.style.gridColumnStart)
        };
        this.isRunning = false;
        this.nodesInOrder = [];
        this.searchedNodes = [];
    }

    isTarget(toCheck) {
        return toCheck.x == this.target.x && toCheck.y == this.target.y;
    }

    isStart(toCheck) {
        return toCheck.x == this.start.x && toCheck.y == this.start.y;
    }

    returnNode(x, y) {
        return document.querySelector(`div[style="grid-row-start: ${x}; grid-column-start: ${y};"]`);
    }

    isWall(toCheck) {
        return this.returnNode(toCheck.x, toCheck.y).classList.contains("wall");
    }

    isValid(toCheck) {
        return toCheck.x >= 1 && toCheck.x <= 40 && toCheck.y >= 1 && toCheck.y <= 40;
    }

    isAdded(toCheck) {
        return this.nodesInOrder.find(el => el.x == toCheck.x && el.y == toCheck.y);
    }

    promiseColoring(node) {
        return new Promise((resolve, reject) => {
            const elementNode = this.returnNode(node.x, node.y);
            if (!this.isRunning) return reject("Script stopped running");
            if (this.isTarget(node)) return this.isRunning = false;

            elementNode.classList.add("searched");
            resolve(node);
        })
    }

    async breadthFirstSearch() {
        this.isRunning = true;

        this.nodesInOrder.push(this.start);
        let i = 0;
        while (!this.isTarget(this.nodesInOrder[0])) {
            let firstNode = this.nodesInOrder.shift();

            let leftNode = { x: firstNode.x - 1, y: firstNode.y },
                rightNode = { x: firstNode.x + 1, y: firstNode.y },
                topNode = { x: firstNode.x, y: firstNode.y + 1 },
                downNode = { x: firstNode.x, y: firstNode.y - 1 }

            for (const node of [leftNode, topNode, rightNode, downNode]) {
                if (this.isValid(node) && !this.isWall(node) && !this.isAdded(node) && !this.isStart(node)) {
                    this.nodesInOrder.push(node);
                    setTimeout(async () => {
                        await this.promiseColoring(node);
                        i++;
                    }, 1000 * i);
                }
            }
        }
    }
}

export default Algorithmer;