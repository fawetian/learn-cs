# 分布式系统（ds）

## 包含内容

一致性与共识、复制、分区与 CAP、分布式存储、分布式计算、时钟与顺序。笔记在 `note/`，导读见 `index.mdx`。

## 学习资料

- `_book/`：待补充
- `_resource/`：论文（如 Raft、MapReduce）、课程等；含 MIT 6.824 讲义（`mit6824/`）

## 实验仓库

| 仓库 | 内容 | 说明 |
| --- | --- | --- |
| [OneSizeFitsQuorum/MIT6.824-2021](https://github.com/OneSizeFitsQuorum/MIT6.824-2021) | MIT 6.824 2021 全部 Lab（Go） | Lab 1~4 + 2 个 Challenge，稳定通过全部测试（每个 lab 跑 500+ 次），附各 Lab 文档；配合 `_resource/mit6824/` 讲义使用 |
| [SwordHarry/MIT6.824_2021_note](https://github.com/SwordHarry/MIT6.824_2021_note) | MIT 6.824 2021 学习笔记 | 4 个 Lab（含 Challenge）思路与踩坑记录 + 14 篇论文笔记（schedule Question 解答）；其知识总结脑图已转存为 `_mindmap/mit6824-summary.drawnix` |
| [he2121/MIT6.824-2021](https://github.com/he2121/MIT6.824-2021) | MIT 6.824 2021 中文翻译与笔记 | 官方 lecture note / Lab 文档中文翻译（docs-cn）+ Lab 实现思路博客（my-blog：Lab1、Lab2A~2D 全流程；代码不公开只写思路），笔记细致好读，适合做 lab 前预习 |

## 学习方法

走 IPO 链路。分布式系统的坑都在「部分失败」里，笔记多从故障场景切入：先描述一个会出问题的具体情形，再讲机制怎么防。

## 其他

待补充。
