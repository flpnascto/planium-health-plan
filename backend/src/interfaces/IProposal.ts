interface IItem {
  name: string;
  age: number;
  price: number;
}

interface IProposalInput {
  items: IItem[];
  planRegister: string;
}

interface IProposalOutput {
  clients: IItem[];
  totalPrice: number;
}

interface IProposal extends IProposalOutput {
  id: string;
}

export {
  IItem,
  IProposal,
  IProposalInput,
  IProposalOutput,
}
