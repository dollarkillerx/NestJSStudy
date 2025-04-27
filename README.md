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

添加新模块
```bash
nest g module todos
nest g controller todos
nest g service todos

│   └── todos
│       ├── dto
│       │   └── create-todo.dto.ts   // request
│       ├── entities
│       │   └── todo.entity.ts       // entity
│       ├── todos.controller.ts
│       ├── todos.module.ts
│       └── todos.service.ts

添加任务：POST http://localhost:3000/todos
获取所有任务：GET http://localhost:3000/todos
删除任务：DELETE http://localhost:3000/todos/1
```

demo1-code // 内存版本

##### db

demo1-pg   // pgsql 版本

``` 
pnpm install --save @nestjs/typeorm typeorm pg
pnpm install @nestjs/core@latest @nestjs/common@latest @nestjs/typeorm@latest
```


##### auth

``` 
npm install --save @nestjs/jwt passport-jwt @nestjs/passport passport bcryptjs
npm install --save-dev @types/bcryptjs
```