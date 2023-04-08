var inorderTraversal = function(root) {
    let inorder = []
    let stack = []
    let node = root
    while(true){
        if(node!=null){
            stack.push(node)
            node = node.left
        }else{
            if(stack.length==0) break;
            node= stack.pop()
            inorder.push(node.val)
            node= node.right
        }
    }

    return inorder
    
};