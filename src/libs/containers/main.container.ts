export class MainContainer {
    
    public static MainContainerInstance: MainContainer | null;
    private static moduleInstances: Map<string, any>; 
    private static controllerInstances: Map<string, any>; 

    private constructor() {
        MainContainer.moduleInstances = new Map<string, any>();
        MainContainer.controllerInstances = new Map<string, any>();        
    }

    public register(key: string, instance: any) {
        MainContainer.moduleInstances.set(key, instance);
    }

    public resolve<T>(key: string): T {
        if(!MainContainer.moduleInstances.has(key)) throw new Error("Dependency is not registered");

        return MainContainer.moduleInstances.get(key);
    }

    public static getMainContainer() {
        if(!MainContainer.MainContainerInstance) {
            MainContainer.MainContainerInstance = new MainContainer();
        }

        return MainContainer.MainContainerInstance;
    }
}

export const AppContainer = MainContainer.getMainContainer();