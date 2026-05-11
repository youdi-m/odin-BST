class Node {

	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class Tree { 

	constructor(arr) {
		this.arr = arr;
		this.sortArray();
		this.removeDuplicates();
		this.root = this.buildTree(this.arr);
	}

	// sorts the given array
	sortArray() {
		return this.arr.sort((a,b) => a-b);
	}

	// removes duplicates from the given array
	removeDuplicates() {

		// splice array ar the duplicate value
		// decrement i in case theres 3 or more in a row
		for(let i = 1; i < this.arr.length; i++) {
			if(this.arr[i] == this.arr[i-1]) {
				this.arr.splice(i,1);
				i--;
			}
		}

		return this.arr;
	}

	// turns the array into a balanced tree with node objects
	// returns tree root
	buildTree(arr) {
		if(arr.length === 0) return null;

		// get mid point of the array
		let mid = Math.floor(arr.length/2);
		
		// define root as value at the mid point
		let root= arr[mid];
		let newNode = new Node(root);

		// recursively split the array until theres nothing
		newNode.left = this.buildTree(arr.slice(0, mid));
		newNode.right = this.buildTree(arr.slice(mid + 1));

		// return root of our tree
		return newNode;
	}
	

	// return true\false if value is\is not in the tree
	includes(value) {
		
		for(let i = 0; i < this.arr.length; i++) {
			if(this.arr[i] == value) {
				return true;
			}
		}
		return false;
	}

	// insert a node with that value into the tree
	// if the value exists do nothing
	insert(value) {
		if(this.includes(value)) return 0;

		this.arr.push(value);
		this.sortArray();
		
	}

	// removes value from the tree
	deleteItem(value) {
		this.arr.slice(value, 1);
	}

	// accepts callback function
	// traverses tree in BFS, passes the VALUE of the nodes as arguments
	levelOrderForEach(callback) {

	}

	// accepts callback function
	// traverses the tree from root - left - right
	inOrderForEach(callback) {

	}

	// accepts callback function
	// traverses the tree from left - root - right
	preOrderForEach(callback) {

	}

	// accepts callback function
	// traverses the tree from left - right - root
	postOrderForEach(callback) {

	}

	// return the height of the node containing the given value
	height(value) {

	}

	// return the depth of the node containing the given value
	depth(value) {

	}

	// checks if tree is balanced
	isBalanced() {

	}

	// rebalances an unbalanced tree
	rebalance() {

	}

}

