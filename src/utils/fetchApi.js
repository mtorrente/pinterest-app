// p5F2mZgjucVYb675raTojNTdA_dx_JyEJRW7W9zbsf4

const API_KEY = "vlgJ9oqFteWlvpQB4T5F8Au5VKvP3KYV4DXkmZ1X1Q0";

const url = "https://api.unsplash.com/search/photos";

export const fetchApi = async (query) => {
    try {
        const response = await fetch (`${url}/?query=${query}&per_page=20&client_id=${API_KEY}`);
        console.log("Response", response);

        const res = await response.json();
        console.log("Response JSON", res);
         
    } catch (error) {
        console.log("Error getting image", error);
        
    }
};