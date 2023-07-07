import { generateTextAndImage } from "./utils.js"

// 1. Change the value of the variable to your name
let name = "SameerSweety Swain"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "Help CSE Students TO get PAID Courses As A Free Of Cost"

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "Banana"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 1

// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
