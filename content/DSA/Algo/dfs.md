---
title: Depth First Search
---
DFS is one of the traversal methods used commonly to parse through or search elements in a tree (binary or otherwise). \[Also used to implement post-order traversal]

Implmentation of DFS is usually done with a stack to keep track of order in which the elements were visited.

The principle behind DFS is that we start by taking a node and recursively visit the first child followed by the second and so on.

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public void dfs(Node curr, List<Integer> res) {
        for (Node child: curr.children) {
            dfs(child, res);
        }

        res.add(curr.val);
    }

    public List<Integer> postorder(Node root) {
        if (root == null) return new ArrayList<Integer>();

        List<Integer> res = new ArrayList<Integer>();
        
        dfs(root, res);

        return res;
    }
}
```

*Snippet from solution to [590. N-ary Tree Postorder Traversal](https://leetcode.com/problems/n-ary-tree-postorder-traversal/)*

![[Pasted image 20240828035129.png]]

[GFG](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/) has great explanation + examples of implementation of DFS.