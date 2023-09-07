export interface IModelReader<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>
}
