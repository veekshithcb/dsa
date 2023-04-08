class Solution {



    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList < Integer > ans = new ArrayList < Integer > ();
        if(root == null ) return ans;
        Stack<TreeNode> st = new Stack<TreeNode>();
        st.push(root);
        
        while(!st.isEmpty()){
            root = st.pop();
            ans.add(root.val);
            if(root.right!=null)  st.push(root.right);
            if(root.left!=null)  st.push(root.left);
        }
        return ans;
    }
}