export class EleccionVoting {
  description: String;
  id?: string = '';
  votingStatus: String;
  date: Date;
  isActive: boolean;

  constructor(
    description: String,
    votingStatus: String,
    date: Date,
    isActive: boolean
  ) {
    this.description = description;
    this.votingStatus = votingStatus;
    this.date = date;
    this.isActive = isActive;
  }
}
