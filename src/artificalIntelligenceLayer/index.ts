import {Tag, KnowledgeDocument } from "@/model/model";

/**document.getElementById("app").innerHTML = `
<h1>Typescript Practice!h2</h1>
<input type="button" value="Click" id="coolbutton"></input>

`;*/



// Named function
function matchTagsFromText(knowledgeDocument: KnowledgeDocument, tags: Tag[]) {
  let resultTags = [] as Tag[];
  tags.forEach((tagFromInputList: Tag) => {
    if (knowledgeDocument.text.includes(tagFromInputList.name)) {
      resultTags.push(tagFromInputList);
    }
  });

  return resultTags;
}

// find aimilar doc lists
function findMatchingDocuments(document: KnowledgeDocument, knowledgeDocuments: KnowledgeDocument[]) {
  let matchingDocuments = [];
  

  knowledgeDocuments.forEach((item: KnowledgeDocument) => {
    let matchCounter = 0;

    item.tagMatches.forEach((tagFromKnowledgeDocument: Tag) => {
      document.tagMatches.forEach((tagFromInputList: Tag) => {
        if (tagFromInputList.name.includes(tagFromKnowledgeDocument.name)) {
          matchCounter++;
        }

      });
    });
    console.log("MatchCount" + matchCounter + " for Document: " + item.name);
    item.similarity = matchCounter;
  });

  sortDocumentsBySimilarty(knowledgeDocuments);

  try {
    let slicedDocumentList = knowledgeDocuments.slice(0,3);
    console.log("sliced? " + slicedDocumentList)
    return slicedDocumentList;
  } catch (error) {
    console.log(error)
  }
}

function sortDocumentsBySimilarty(knowledgeDocumentsMapping: KnowledgeDocument[]) {
  knowledgeDocumentsMapping.sort((n1,n2) => {
    if (n1.similarity > n2.similarity) {
        return -1;
    }

    if (n1.similarity < n2.similarity) {
        return 1;
    }

    return 0;
  });
 
 
}



let testDocument1 = new KnowledgeDocument("Doc1", "hello sef se fse s ef esfs");
let testDocument2 = new KnowledgeDocument("Doc2", "hello ja nein vielleicht");
let testDocument3 = new KnowledgeDocument("Doc3", "kein tag enthalten");
let testDocument4 = new KnowledgeDocument("Doc4", "hello sef se fse s ef esfs");

testDocument1.tagMatches = matchTagsFromText(testDocument1, [new Tag("hello", 1), new Tag("vielleicht", 1), new Tag("fse", 1)])
testDocument2.tagMatches = matchTagsFromText(testDocument2, [new Tag("hello", 1), new Tag("vielleicht", 1), new Tag("fse", 1)])
testDocument3.tagMatches = matchTagsFromText(testDocument3, [new Tag("hello", 1), new Tag("vielleicht", 1), new Tag("fse", 1)])
testDocument4.tagMatches = matchTagsFromText(testDocument4, [new Tag("hello", 1), new Tag("vielleicht", 1), new Tag("fse", 1)])

export const testRatedDocuments = findMatchingDocuments(testDocument1, [testDocument2, testDocument3, testDocument4]);
testRatedDocuments.forEach((ratedDocuemtn: KnowledgeDocument) => { 
  console.log("ratedDocuemtn" + ratedDocuemtn.name + " : sim" +ratedDocuemtn.similarity);
});

//console.log(matchTagsFromText("hello sef se fse s ef esfs", [new Tag("hello", 1)]));
