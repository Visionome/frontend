import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function axiosRequest(name) {
  console.log('in generequest: ' + name);
  var data = JSON.stringify({
    query: `query MyQuery($name: String = "") {
      searchGFFRefs(filter: {name: $name, and: {cytobandlocation: {exists: true, ne: "-"}}}) {
        items {
          id
          name
          gene
          gbkey
          cytobandlocation
          diseaseinfo
          ensembleid
        }
      }
    }`,
    variables: { name: name },
  });

  var config = {
    method: 'post',
    url: 'https://nyl4bhqofrblfloxclguv4lvbm.appsync-api.us-east-1.amazonaws.com/graphql',
    headers: {
      'x-api-key': 'da2-3bx44bcsrbcflmw66iqaoauxmu',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  //let res = '';
  return axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      return JSON.stringify(response);
      //return JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
