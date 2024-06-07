export type ElementType<T> = T extends (infer U)[] ? U : never;
export type ExtractType<T> = T extends { type: infer U } ? U : never;
export type ExtractBrand<T> = T extends { _brand: infer U } ? U : never;
export type ExtractAnswer<T> = T extends { answer: infer U } ? U : never;
