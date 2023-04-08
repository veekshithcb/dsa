class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        Queue<TreeNode> q  = new LinkedList<TreeNode>();
        List<List<Integer>> ans = new  ArrayList<List<Integer> >();
        if(root == null ) return ans;
        q.offer(root);

        while(!q.isEmpty()){
            int level = q.size();
            List<Integer>sublist = new ArrayList<Integer>();
            for(int i =0; i<level ; i++){
                if(q.peek().left !=null)  q.offer(q.peek().left);
                if(q.peek().right !=null)  q.offer(q.peek().right);
                sublist.add( q.poll().val);
            }
            ans.add(sublist);
        }
        return ans;
    }
}