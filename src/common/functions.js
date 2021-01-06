import { firestore } from "../firebase";

class Functions {
  // This Function is not being referred.
  uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  async getCollect(collectName, where, orderBy) {
    try {
      let firestoreCollection;
      if (where)
        firestoreCollection = orderBy
          ? await firestore
              .collection(collectName)
              .where(where.attrName, where.operator, where.value)
              .orderBy(orderBy.attrName, orderBy.order)
              .get()
          : await firestore
              .collection(collectName)
              .where(where.attrName, where.operator, where.value)
              .get();
      else
        firestoreCollection = orderBy
          ? await firestore
              .collection(collectName)
              .orderBy(orderBy.attrName, orderBy.order)
              .get()
          : await firestore.collection(collectName).get();

      return [firestoreCollection, null];
    } catch (err) {
      return [null, err];
    }
  }

  async getDoc(collectName, docName) {
    try {
      let firestoreDoc = await firestore
        .collection(collectName)
        .doc(docName)
        .get();

      return [firestoreDoc.data(), null];
    } catch (err) {
      return [null, err];
    }
  }

  async deleteDoc(collectName, docName) {
    try {
      await firestore.collection(collectName).doc(docName).delete();
      return null;
    } catch (error) {
      return error;
    }
  }
}

export default Functions;
