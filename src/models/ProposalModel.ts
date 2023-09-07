import { IProposal, IProposalOutput } from '../interfaces/IProposal';
import { FileType, HandleFile } from './HandleFile';
import { v4 as uuidv4 } from 'uuid';

export default class ProposalModel {
  private fileType: FileType = 'proposal';
  private handleFile = new HandleFile();

  public async getAll(): Promise<IProposal[]> {
    const proposals = await this.handleFile.readFile<IProposal[]>(this.fileType);
    return proposals;
  }

  public async create(proposal: IProposalOutput): Promise<void> {
    const proposals = await this.getAll();
    const id = uuidv4();
    proposals.push({id, ...proposal });
    await this.handleFile.saveFile(this.fileType, proposals);
  }

}