# pwd-gen-tiny

pwd-gen-tiny 是一个轻量级、灵活的随机密码生成库，支持自定义密码长度、字符类型和最少字符数量。适用于需要高安全性密码的场景。

## 安装

使用 npm 安装：

```bash
npm install pwd-gen-tiny
```

使用 yarn 安装：

```bash
yarn add pwd-gen-tiny
```

## 使用方法

### 基本用法

```typescript
import { generatePassword } from "pwd-gen-tiny";

const password = generatePassword({ length: 12 });
console.log(password); // 输出类似: "A3b@9kL2!xZ8"
```

### 自定义选项

```typescript
const password = generatePassword({
  length: 16,
  includeUppercase: false, // 不包含大写字母
  includeSymbols: false, // 不包含符号
  minNumbers: 4, // 至少包含 4 个数字
  avoidAmbiguousChars: true, // 避免容易混淆的字符
});

console.log(password); // 输出类似: "k5m9n2p4q6r7s8t9"
```

### API 文档

`generatePassword(options: PasswordOptions): string`

生成随机密码。

**参数**

- options (PasswordOptions): 配置对象，包含以下属性：

  - length (number): 密码长度（必填）。

  - includeUppercase (boolean, 默认 true): 是否包含大写字母。

  - includeSymbols (boolean, 默认 true): 是否包含符号（!@#^&\*）。

  - minNumbers (number, 可选): 数字的最少个数。如果不填，则随机生成。

  - minSymbols (number, 可选): 符号的最少个数。如果不填，则随机生成。

  - minUppercase (number, 可选): 大写字母的最少个数。如果不填，则随机生成。

  - avoidAmbiguousChars (boolean, 默认 true): 是否避免容易混淆的字符（如 1-l, 0-oO 等）。

**返回值**

- string: 生成的随机密码。

---

### 示例

#### 示例 1：生成包含符号和大写字母的密码

```typescript
const password = generatePassword({ length: 10 });
console.log(password); // 输出类似: "A3b@9kL2!x"
```

#### 示例 2：生成仅包含小写字母和数字的密码

```typescript
const password = generatePassword({
  length: 8,
  includeUppercase: false,
  includeSymbols: false,
});

console.log(password); // 输出类似: "k5m9n2p4"
```

#### 示例 3：生成包含最少 3 个数字和 2 个大写字母的密码

```typescript
const password = generatePassword({
  length: 12,
  minNumbers: 3,
  minUppercase: 2,
});

console.log(password); // 输出类似: "A3b@9kL2!xZ8"
```

#### 错误处理

如果参数不合法，generatePassword 会抛出错误：

- 如果 length 小于 1，抛出 "密码长度必须大于 0"。

- 如果 includeUppercase 为 false 但 minUppercase 大于 0，抛出 "当 includeUppercase 为 false 时，minUppercase 必须为 0"。
- 如果字符池为空（例如所有字符类型被禁用），抛出 "字符池为空，无法生成密码。请至少启用一种字符类型。"。

## 贡献

欢迎提交 Issue 或 Pull Request！请确保代码风格一致，并通过所有测试。

## 许可证

MIT
