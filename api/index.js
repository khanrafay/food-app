const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '69cfed012emsh9d500083783d80bp1d9468jsna0e520d46c86',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US';




export const getRestaurants = async () => {
    try {
        let responseResturant = '';
        await fetch(URL, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                responseResturant = response;
            })
            .catch(err => console.error(err));
        return responseResturant;
    } catch (error) {
        console.log('error', error)
    }
}