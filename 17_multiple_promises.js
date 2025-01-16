function handleMultiplePromises(promises) {
  Promise.all(promises)
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("At least one promise rejected:", error);
    });
}


const promise1 = Promise.resolve("Result 1");
const promise2 = Promise.resolve("Result 2");
const promise3 = Promise.resolve("Result 3");

handleMultiplePromises([promise1, promise2, promise3]);