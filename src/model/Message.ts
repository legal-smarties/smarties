import { Tag } from './model';

export interface Message {
    id: number,
    origin: string,
    type: string,
    subject: string,
    content: string,
    date: Date,
    tags: Tag[]
}