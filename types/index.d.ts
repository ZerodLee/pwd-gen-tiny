interface PasswordOptions {
  length: number; // 密码长度
  includeSymbols: boolean; // 是否包含符号
  includeUppercase: boolean; // 是否包含大写字母
  minNumbers?: number; // 数字的最少个数
  minSymbols?: number; // 符号的最少个数
  minUppercase?: number; // 大写字母的最少个数
//   minLowercase?: number; // 小写字母的最少个数
  avoidAmbiguousChars: boolean; // 是否避免容易混淆的字符
}
