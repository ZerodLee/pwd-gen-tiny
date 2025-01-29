# pwd-gen-tiny

### [中文文档](./README-zh_CN.md)

pwd-gen-tiny is a lightweight and flexible library for generating random passwords. It supports custom password length, character types, and minimum character counts. Ideal for scenarios requiring high-security passwords.

## Installation

Install via npm:

```bash
npm install pwd-gen-tiny
```

Install via yarn:

```bash
yarn add pwd-gen-tiny
```

## Usage

### Basic Usage

```typescript
import { generatePassword } from "pwd-gen-tiny";

const password = generatePassword({ length: 12 });
console.log(password); // Example output: "A3b@9kL2!xZ8"
```

### Custom Options

```typescript
const password = generatePassword({
  length: 16,
  includeUppercase: false, // Exclude uppercase letters
  includeSymbols: false, // Exclude symbols
  minNumbers: 4, // At least 4 numbers
  avoidAmbiguousChars: true, // Avoid ambiguous characters
});

console.log(password); // Example output: "k5m9n2p4q6r7s8t9"
```

## API Documentation

`generatePassword(options: PasswordOptions): string`

Generates a random password.

**Parameters**

- options (PasswordOptions): Configuration object with the following properties:

  - length (number): Password length (required).

  - includeUppercase (boolean, default true): Whether to include uppercase letters.

  - includeSymbols (boolean, default true): Whether to include symbols (!@#^&\*).
  - minNumbers (number, optional): Minimum number of digits. If not provided, a random value is generated.

  - minSymbols (number, optional): Minimum number of symbols. If not provided, a random value is generated.

  - minUppercase (number, optional): Minimum number of uppercase letters. If not provided, a random value is generated.

  - avoidAmbiguousChars (boolean, default true): Whether to avoid ambiguous characters (e.g., 1-l, 0-oO).

**Returns**

string: The generated random password.

**Examples**

#### Example 1: Generate a Password with Symbols and Uppercase Letters

```typescript
const password = generatePassword({ length: 10 });
console.log(password); // Example output: "A3b@9kL2!x"
```

#### Example 2: Generate a Password with Only Lowercase Letters and Numbers

```typescript
const password = generatePassword({
  length: 8,
  includeUppercase: false,
  includeSymbols: false,
});

console.log(password); // Example output: "k5m9n2p4"
```

#### Example 3: Generate a Password with at Least 3 Numbers and 2 Uppercase Letters

```typescript
const password = generatePassword({
  length: 12,
  minNumbers: 3,
  minUppercase: 2,
});

console.log(password); // Example output: "A3b@9kL2!xZ8"
```

## Error Handling

If the parameters are invalid, generatePassword will throw an error:

- If length is less than 1, throws "Password length must be greater than 0".

- If includeUppercase is false but minUppercase is greater than 0, throws "When includeUppercase is false, minUppercase must be 0".

- If the character pool is empty (e.g., all character types are disabled), throws "Character pool is empty. Please enable at least one character type.".

## Contributing

Issues and Pull Requests are welcome! Please ensure code style consistency and pass all tests.

## License

MIT
