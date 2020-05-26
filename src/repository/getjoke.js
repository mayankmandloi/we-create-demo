export const getData = async () => {
    const data= await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await data.json()
    return jsonData.value;
}