const restClient = {
  
    parseJSON(response) {
      return response.json();
    },
  
    get(url) {
      return fetch(url, {
        method: 'GET',
      })
        .then(response => this.parseJSON(response))
        .then(response => {
          return response;
        })
        .catch(error => {
            return undefined;
        });
    },

  
  };
  
  export default restClient;
  