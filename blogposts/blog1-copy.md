---
title: 'Assigning variable in python'
date: '2023-09-24'
tags: ['Python', 'Beginner', 'Basics', 'Fundamentals']
description: 'One line assignment in python vs normal way of assignment'
timeToRead: '1'
---

So, I was revisiting the leetcode problems and solved the classic how to invert a binary tree problem. I ended up writing a recursive code just like the majority will do. While doing so I encountered an interesting thing. This might be a very basic stuff for a lot of python devs but for someone who doesn't write too much python code (me) I found it interesting and something to keep in mind.

```py
class Solution:
  def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if root:
      left = self.invertTree(root.right)
      right = self.invertTree(root.left)
      root.left = left
      root.right = right
    return root
```

Simple right?

I decided to write an iterative code now. After looking up some answers I realized that okay, we will have to use a stack for this. I ended up writing this code.

```py
class Solution:
  def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root: return root
    stack = [root]
    while len(stack):
      node = stack.pop()
      # see the below two lines
      node.left = node.right
      node.right = node.left
      if node.left:
        stack.append(node.left)
      if node.right:
        stack.append(node.right)
      return root
```

The marked two lines don't make much sense. What I'm doing there is just making the node.left right and now I'm making the node.right node.left which is now node.right. Right?

Now, we know we can also do this in python.

```py
num1, num2 = 1,2
```

Here, num1 will be 1 and num2 will be 2.

Many with experience of other languages like java, etc. might see it as

```java
int num1 = 10, num2 = 20;
```

So, with the same logic as above, we can say that this code shouldn't work either?

```py
class Solution:
  def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root: return root
    stack = [root]
    while len(stack):
      node = stack.pop()
      node.left, node.right = node.right, node.left
      if node.left:
        stack.append(node.left)
      if node.right:
        stack.append(node.right)
      return root
```

But here's the catch, this works fine.

The reason for that is because we are not just assigning the values like we do in other languages.

This type of assignment is called tuple assignment in python. So, basically in the context of the leetcode problem, what basically happened is swapping not just assignment. It happened at the same time.
