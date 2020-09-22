# Ride For Life - Front-End

## Install
`npm install` or `yarn install`

#

## Usage
`npm start` or `yarn start` 

#

## Project Name
Ride For Life

#

## Project Timeline
2 weeks (30 hrs work time total)

#

## Pitch
_Ride For Life_ serves mothers in Uganda to improve maternal and child survival. One of the biggest obstacles women face while pregnant is getting to a health facility to safely deliver. Most people do not own a car or a motorcycle, and a majority live greater than 5 km from a health center (an hour by foot). _Ride For Life_ provides a solution by quickly dispatching motorcycle ambulances to women in need of urgent medical care. By quickly providing transportation to qualified medical care, _Ride For Life_ hopes to address issues of mortality and pregnancy complications in Uganda.

#

## Tech Stack
* ReactJS
* React Router
* Component styles by ReactStrap

#

## Other Dependencies
* axios
* Formik
* Yup

### State management
* redux
* react-redux
* redux-thunk
* redux-logger
* reactstrap/bootstrap

### Hosting
* Netlify 
* Marketing Site
* React App
* Ride For Life Back-End API

#

## Links

* [Marketing Page](https://rideforlife19.netlify.com/ "Ride For Life Marketing Page")
* App Sign-Up Pages
    * [Driver](https://build-ride-for-life.netlify.com/driver-signup/ "Ride For Life Driver Sign-up page")
    * [Rider](https://build-ride-for-life.netlify.com/rider-signup/ "Ride For Life Rider Sign-up page")
* [Back-End](https://github.com/RideforLife/BackEnd "Ride For Life Back-End repository")

#

## Development Team

### UI
* [Sara Doolin - UI Designer](https://github.com/saradoolin/ "Sara Doolin Github Link")
* [Candace Wilson - UI Designer](https://github.com/candaceyw/ "Candace Wilson Github Link")

### React
* [Austin Kelsay - React Developer](https://github.com/AustinKelsay/ "Austin Kelsay Github Link")
* [Stephen Tanksley - React Developer](https://github.com/stephentanksley/ "Stephen Tanksley Github Link")

# 

## Post-Mortem

This project was meant to allow me the opportunity to take a leading role in a React team by helping my partner Austin. I was further along in Lambda's curriculum than he was, so I was the most senior front-end developer on the team.

### Successes

I consider one of this project's successes the use of generic, reusable functions. A great example of this is the axiosRequest() function from api.js.

```
export const axiosRequest = () => {    
    return(
        
        getToken()
        
        ? axios
            .create({
            baseURL: 'https://rideforlife-backend.herokuapp.com',
            headers: {
                "Content-Type" : 'application/json',
                "Authorization" : getToken(),
            }
        })

        : axios
            .create({
            baseURL: 'https://rideforlife-backend.herokuapp.com',
        })
    )
}
```

This function utilizes a simple getToken() helper function to determine if a JSON Web Token exists in localStorage. If so, it sets that token in the request headers of the Axios call. If the token does not exist (for initial GET type requests, for example), it omits the header and performs the request regardless. This allows the developer the freedom to use the same function for a variety of use cases.

### Opportunities for Improvement

I believe that state management was an area where Austin and I could have been better prepared (myself especially). We chose to use Redux for this project to handle state. The rationale at the time was that there were two distinct user classes (riders, drivers) and therefore we might need to manage a great deal of data for each class. Lots of data, lots of complexity, requires a complex solution...right?

In retrospect, there are a few changes to the schema I'd make. I believe it would be an equally effective solution to consolidate users into a single class (user). In each user, we could create a single Boolean switch to determine the user's class (i.e. rider: true). If the boolean was false, it would then be assumed that the user was a driver. 

With the reduction of user classes to a single base class, I believe that our state management solution could have been reduced considerably. I was unprepared for just how quickly complexity can creep up into even as simple a project as this (essentially a CRUD app with the beginnings of some social functionality). I believe now that state in this app could be effectively managed with a combination of local useState hooks and the React Context API.
