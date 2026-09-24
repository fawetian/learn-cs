export const site = {
  label: "Learn CS",
  description: "计算机科学学习笔记：操作系统、分布式系统、算法、数据库、计算机网络。",
  url: "https://cs.anme.cc",
  devPort: 4340,
  previewPort: 4350,
};

export const subjects = [
  {
    id: "os",
    label: "操作系统",
    description: "从具体问题出发学习操作系统：读资料、做笔记，再用输出检验理解。",
  },
  {
    id: "ds",
    label: "分布式系统",
    description: "从具体问题出发学习分布式系统：读资料、做笔记，再用输出检验理解。",
  },
  {
    id: "algo",
    label: "算法",
    description: "从具体问题出发学习算法：读资料、做笔记，再用输出检验理解。",
  },
  {
    id: "db",
    label: "数据库",
    description: "从具体问题出发学习数据库：读资料、做笔记，再用输出检验理解。",
  },
  {
    id: "net",
    label: "计算机网络",
    description: "从具体问题出发学习计算机网络：读资料、做笔记，再用输出检验理解。",
  },
  {
    id: "golang",
    label: "Golang",
    description: "从具体问题出发学习 Golang：读资料、做笔记，再用输出检验理解。",
  },
  {
    id: "arch",
    label: "架构",
    description: "从具体问题出发学习架构：读资料、做笔记，再用输出检验理解。",
  },
];

// 注意：Starlight 的 autogenerate 按「文件相对项目根的路径」匹配，
// 内容在 ../content/ 下，所以 directory 必须带上 ../content 前缀。
export const sidebar = [
  { label: "学习导读", link: "/" },
  ...subjects.map((s) => ({
    label: s.label,
    items: [
      { label: "领域导读", link: `/${s.id}/` },
      { autogenerate: { directory: `../content/${s.id}/note` } },
    ],
  })),
];
