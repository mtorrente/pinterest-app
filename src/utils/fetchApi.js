// p5F2mZgjucVYb675raTojNTdA_dx_JyEJRW7W9zbsf4

const API_KEY = "vlgJ9oqFteWlvpQB4T5F8Au5VKvP3KYV4DXkmZ1X1Q0";

const url = "https://api.unsplash.com/search/photos";

export const fetchApi = async (query = "epic") => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    try {
        const response = await fetch (`${url}/?query=${query}&page=${randomPage}&per_page=30&client_id=${API_KEY}`);

        console.log(response);
        
        
        const res = await response.json();
        console.log(res);
        
        if (res.results.length === 0) {
            return [];
        } else {
            return res.results;  
        }        
        
         
    } catch (error) {
        console.log("Error getting image", error);
        
    }

};

export const fetchApiError = async (query = "sad dogs") => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    try {
        const response = await fetch (`${url}/?query=${query}&page=${randomPage}&per_page=1&client_id=${API_KEY}`)
        const res = await response.json();
        
        return res.results;
        
    } catch (error) {
        console.log("Error getting image", error);
    }
}