import { Tag } from './model'
import { Message } from './Message';

export interface Conversation {
    tags: Tag[]
    messages: Message[]
}