import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), 
 { headers: {
    'X-RapidAPI-Key': '3e0dd86e83mshfd00507d24fcab4p1fbfa8jsn1ec1f1c8d228',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
});

return data;
}

