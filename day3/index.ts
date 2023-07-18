/******************************** Module Types  ********************************/

type TConstantModule = typeof import("./Constants");

type TActions = TConstantModule[keyof TConstantModule];
