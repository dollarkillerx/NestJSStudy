# NestJSStudy
NestJSStudy

### basic
```bash 
$ npm i -g @nestjs/cli
$ npm install -g pnpm
$ nest new project-name
```


| 文件名 | 对应角色 | 类似于... |
|--------|----------|-----------|
| `main.ts` | 启动器 | Java 的 `main()`，Vue 的 `main.js` |
| `app.module.ts` | 模块管理 | Angular 的 `AppModule` |
| `app.controller.ts` | 控制器 | Express 的路由处理函数 |
| `app.service.ts` | 服务层 | Service（业务逻辑） |
| `app.controller.spec.ts` | 单元测试 | Jest 测试文件 |

run dev

```bash
-b swc 使用swc构建
pnpm run start:dev -b swc 
```