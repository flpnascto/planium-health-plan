interface IItem {
  name: string,
  age: number,
  price: number,
}

interface IProposalInput {
  items: IItem[]
  planRegister: string;
}

interface IProposalOutput {
  clients: IItem[];
  totalPrice: number;
}

export {
  IItem,
  IProposalInput,
  IProposalOutput,
}
