export default interface EventItem {
  name: string;
  category: string;
  activity: string;
  date: Date;
  updatedOn: Date;
  location?: string;
  description?: string;
  isSpecial?: boolean;
}