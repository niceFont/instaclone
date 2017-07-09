const initialstate = {
    posts: [{
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
        {
            image: "https://cdn.iphonephotographyschool.com/wp-content/uploads/Eric-Ward-iPhone-Photos-41.jpg",
            user: "SamuelXoxO",
            hearts: 20,
            description: "Just a day outside, enjoying the view ~~",
            title: "Walking on Sunshine..."
        },
    ]
}




export function imageReducer(state = initialstate, action) {

    switch (action.type) {

        case "SHOW_NEWEST":
            return state
        default:
            return state
    }

}