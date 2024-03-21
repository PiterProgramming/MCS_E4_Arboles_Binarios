function areIdentical(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1 === null || root2 === null) {
        return false;
    }
    return (root1.value === root2.value) &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right);
}

function cloneTree(root) {
    if (root === null) {
        return null;
    }
    var newNode = new TreeNode(root.value);
    newNode.left = cloneTree(root.left);
    newNode.right = cloneTree(root.right);
    return newNode;
}

function printNodesAtLevel(root, level) {
    if (root === null) {
        return;
    }
    if (level === 1) {
        console.log(root.value);
    } else if (level > 1) {
        printNodesAtLevel(root.left, level - 1);
        printNodesAtLevel(root.right, level - 1);
    }
}

function countLeaves(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1; // This node is a leaf
    }
    return countLeaves(root.left) + countLeaves(root.right);
}
