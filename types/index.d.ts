// index.d.ts

/**
 * 密码生成配置选项
 */
export interface PasswordOptions {
  /**
   * 密码长度（必填）
   */
  length: number;
  /**
   * 是否包含大写字母（默认 true）
   * @default true
   */
  includeUppercase?: boolean;
  /**
   * 是否包含符号（默认 true）
   * @default true
   */
  includeSymbols?: boolean;
  /**
   * 数字的最少个数（可选，不填则随机生成）
   */
  minNumbers?: number;
  /**
   * 符号的最少个数（可选，不填则随机生成）
   */
  minSymbols?: number;
  /**
   * 大写字母的最少个数（可选，不填则随机生成）
   */
  minUppercase?: number;
  /**
   * 是否避免容易混淆的字符（默认 true）
   * @default true
   */
  avoidAmbiguousChars?: boolean;
}

/**
 * 生成随机密码
 * @param options 密码生成配置
 * @returns 生成的随机密码
 * @throws 如果参数不合法或字符池为空时抛出错误
 */
export function generatePassword(options?: PasswordOptions): string;