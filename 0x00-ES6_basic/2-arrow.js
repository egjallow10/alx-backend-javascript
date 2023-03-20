const getNeighborhoodsList=()=>{
    let sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    const addNeighborhood = (newNeighborhood)=> sanFranciscoNeighborhoods.push(newNeighborhood);
    return addNeighborhood;

  }

  export default getNeighborhoodsList