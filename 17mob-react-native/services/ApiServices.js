export const getResults = season => {
  return fetch(
    `http://ergast.com/api/f1/${
      season
    }/results.json`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
}

export const getAllSeasons = () =>{
  return fetch("http://ergast.com/api/f1/seasons.json?limit=100", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
}

export const getDrivers = season =>{
  return fetch(`http://ergast.com/api/f1/${season}/drivers.json?limit=10`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
}