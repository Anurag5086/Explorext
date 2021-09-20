export function addDocumentAction(docName, type) {
  return fetch("http://localhost:5000/addDocument", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: docName,
      path: `/${docName}`,
      type: type,
    }),
  }).then((data) => data.json());
}

export function getDocumentsAction() {
  return fetch("http://localhost:5000/getDocuments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export function getFoldersAction() {
  return fetch("http://localhost:5000/getFolders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
