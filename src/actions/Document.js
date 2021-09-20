export function addDocumentAction(docName, type) {
  return fetch("https://explore-backend.herokuapp.com/addDocument", {
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
  return fetch("https://explore-backend.herokuapp.com/getDocuments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export function getFoldersAction() {
  return fetch("https://explore-backend.herokuapp.com/getFolders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
