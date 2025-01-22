// import { PasswordOptions } from "../types";
import { defaultOptions } from "./default-config";

// export default function pwdGen(options: PasswordOptions) {
//   const _options = getOptions(options);
//   const password = generatePassword(_options);
//   return password;
// }

// function getOptions(options: Partial<PasswordOptions>): PasswordOptions {
//   return { ...defaultOptions, ...options };
// }

function getConfig(options: Partial<PasswordOptions>): PasswordOptions {
  return { ...defaultOptions, ...options };
}

export default function generatePassword(options: Partial<PasswordOptions> = {}): string {
  const config = getConfig(options);

  // 参数校验
  if (config.length < 1) throw new Error("密码长度必须大于 0");
  if (!config.includeUppercase && (config.minUppercase ?? 0) > 0) {
    throw new Error("当 includeUppercase 为 false 时，minUppercase 必须为 0");
  }

  // 定义字符集
  const uppercaseChars = config.includeUppercase
    ? config.avoidAmbiguousChars
      ? "ABCDEFGHJKLMNPQRSTUVWXYZ"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "";

  const lowercaseChars = config.avoidAmbiguousChars ? "abcdefghijkmnopqrstuvwxyz" : "abcdefghijklmnopqrstuvwxyz";

  const numberChars = config.avoidAmbiguousChars ? "23456789" : "0123456789";

  const symbolChars = "!@#^&*";

  // 生成随机最小值
  const maxRandom = Math.floor(config.length / 3);
  const getRandomMin = () => Math.floor(Math.random() * (maxRandom + 1));

  const minUppercase = config.includeUppercase ? config.minUppercase ?? getRandomMin() : 0;

  const minNumbers = config.minNumbers ?? getRandomMin();
  const minSymbols = config.includeSymbols ? config.minSymbols ?? getRandomMin() : 0;

  // 校验最小值总和
  const totalMin = minNumbers + minSymbols + minUppercase;
  if (totalMin > config.length) {
    throw new Error(`最少字符数量总和（${totalMin}）超过密码长度（${config.length}）`);
  }

  // 生成必需字符
  const passwordChars: string[] = [];

  if (config.includeUppercase) {
    for (let i = 0; i < minUppercase; i++) {
      passwordChars.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    }
  }

  for (let i = 0; i < minNumbers; i++) {
    passwordChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
  }

  if (config.includeSymbols) {
    for (let i = 0; i < minSymbols; i++) {
      passwordChars.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    }
  }

  // 填充剩余字符
  const remainingLength = config.length - passwordChars.length;
  const allChars = [
    ...(config.includeSymbols ? [symbolChars] : []),
    ...(config.includeUppercase ? [uppercaseChars] : []),
    lowercaseChars,
    numberChars,
  ].join("");

  if (allChars.length === 0) {
    throw new Error("字符池为空，无法生成密码。请至少启用一种字符类型。");
  }

  for (let i = 0; i < remainingLength; i++) {
    passwordChars.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  // 打乱顺序
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join("");
}
