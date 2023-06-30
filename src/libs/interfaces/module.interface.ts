export abstract class ModuleInterface {

    public constructor(
        protected imports?: Array<ModuleInterface>,
        protected controllers?: Array<any>,
        protected providers?: Array<any>,
        protected exports?: Array<any>  
    ) {}
    
}