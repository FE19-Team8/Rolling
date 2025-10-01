export const throwIfMissing = (name) => {
  throw new Error(`${name}값은 필수입니다.`);
};
