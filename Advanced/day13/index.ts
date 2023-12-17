type ExtractShade<T extends string> = T extends `red-${infer R}` ? R : T;

type Shade = ExtractShade<"red-100">;
