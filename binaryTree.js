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
    this.array = array;
    this.root = this.buildTree(array);
  }
  buildTree(arr) {
    const sortedArr = mergeSort(arr);

    

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

const firstTree = new Tree(arrayOfData);

// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node === null) {
//     return;
//   }
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };
