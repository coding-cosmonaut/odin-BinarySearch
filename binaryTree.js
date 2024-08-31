let arrayOfData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = mergeSort(array);
    this.root = this.buildTree(array);
  }
  buildTree(arr) {
    //check for duplicates
    const filteredArr = this.array.filter(
      (value, index) => this.array.indexOf(value) === index
    );
    //check for duplicates

    //finding the root/middle and creating new tree
    const root = Math.floor(filteredArr.length / 2);

    const binarySearchTree = new Node(filteredArr[root]);
    //finding the root/middle and creating new tree

    //building Tree iteratively
    let i = 0;
    while (i < filteredArr.length) {
      if (filteredArr[i] === filteredArr[root]) {
        i++;
        continue;
      }
      let current = binarySearchTree;
      while (true) {
        if (filteredArr[i] < current.value) {
          if (current.left === null) {
            current.left = new Node(filteredArr[i]);
            break;
          } else {
            current = current.left;
          }
        } else if (filteredArr[i] > current.value) {
          if (current.right === null) {
            current.right = new Node(filteredArr[i]);
            break;
          } else {
            current = current.right;
          }
        }
      }
      i++;
    }
    return binarySearchTree;
    //building Tree
  }
}

function merge(firstArray, secondArray) {
  let newSortedArr = [];
  let i = 0;
  let j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] <= secondArray[j]) {
      newSortedArr.push(firstArray[i]);
      i++;
    } else if (firstArray[i] > secondArray[j]) {
      newSortedArr.push(secondArray[j]);
      j++;
    }
  }

  while (i < firstArray.length) {
    newSortedArr.push(firstArray[i]);
    i++;
  }
  while (j < secondArray.length) {
    newSortedArr.push(secondArray[j]);
    j++;
  }

  return newSortedArr;
}

function mergeSort(unsortedArray = arrayOfData) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  let left = mergeSort(unsortedArray.slice(0, middle));
  let right = mergeSort(unsortedArray.slice(middle));

  let mergedArray = merge(left, right);
  return mergedArray;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const firstTree = new Tree(arrayOfData);
console.log(firstTree.root, "first");

console.log(prettyPrint(firstTree.root));

//  buildTree(arr, rootObj) {
//     //base case
//     if (arr.length <= 1) {
//       return arr;
//     }
//     //base case

//     //finding the root/middle and creating new tree
//     const root =
//       arr.length % 2 !== 0
//         ? arr[Math.floor(arr.length / 2)]
//         : Math.floor((arr.length - 1) / 2);

//     const binarySearchTree = new Node(arr[root]);
//     //finding the root/middle and creating new tree

//     //check for duplicates

//     //check for duplicates

//     //building Tree
//     if (rootObj) {
//       console.log("oinn");
//       const newValueFromArr = arr[root];
//       console.log(newValueFromArr, "NEW VALUE");
//       if (newValueFromArr < rootObj.value) {
//         rootObj.left = new Node(newValueFromArr);
//       } else {
//         rootObj.right = new Node(newValueFromArr);
//       }
//     }
//     //building Tree

//     //recursive
//     this.buildTree(arr.slice(0, root), binarySearchTree);
//     //const right = this.buildTree(sortedArr.slice(middleOfArr));
//     //recursive
//     console.log(rootObj, 'ROOT')
//     return rootObj;
//   }
