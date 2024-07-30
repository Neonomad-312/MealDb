// www.themealdb.com/api/json/v1/1/search.php?f=a
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// www.themealdb.com/api/json/v1/1/random.php

import axios from "axios";


const instance=axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/"
});

export default instance;