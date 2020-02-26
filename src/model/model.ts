export class KnowledgeDocument {
  name: string;
  text: string;
  tagMatches: Tag[] = [];
  similarity: number = 0;

  constructor(
    name: string,
    text: string
  ) {
    this.name = name;
    this.text = text;
  }
}

export class Tag {
  name: string;
  weight: number;

  constructor(
    name: string,
    weight: number
  ) {
    this.name = name;
    this.weight = weight;
  }
}