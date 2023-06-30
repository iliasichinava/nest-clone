export interface ContainerInterface {
    register(key: string, ): void;
    resolve<T>(key: string): T;
}