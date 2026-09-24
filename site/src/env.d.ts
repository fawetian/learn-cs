// Starlight 0.42 的 virtual:starlight/* 模块由 Vite 在构建时注入，不附带类型声明。
// 这里做最小声明，让 astro check 能通过；运行时行为不受影响。
declare module "virtual:starlight/user-config" {
  const config: {
    pagefind?: boolean;
    components: Record<string, string>;
    [key: string]: unknown;
  };
  export default config;
}

declare module "virtual:starlight/components/*" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any;
  export default Component;
}
