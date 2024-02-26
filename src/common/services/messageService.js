 export const addMessage = (requestData, onSuccess) => {
    fetch("http://localhost:3000/messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((error) => console.error(error));
 }