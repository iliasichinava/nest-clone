import { ModuleInterface } from "../interfaces/module.interface";

interface ModuleProps {
  imports?: Array<ModuleInterface>;
  controllers?: Array<any>;
  providers?: Array<any>;
  exports?: Array<any>;
}

export function Module(props: ModuleProps) {
  return function (constructor: any, _props: any) {

    constructor.imports = props.imports;
    constructor.controllers = props.controllers;
    constructor.providers = props.providers;
    constructor.exports = props.exports;

    // container.register(constructor.name, constructor);

    return constructor;
  };
}