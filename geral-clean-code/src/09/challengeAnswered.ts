function getFirstFiveRatings(ratings: string[]) {
    return ratings.length >= 5 && ratings.slice(0, 5)
}

function sumFirstFiveRatings(ratings: string[]) {
    const ratingsFilled = ratings.length >= 0

    if (ratingsFilled) {
        const firstFiveRatings = getFirstFiveRatings(ratings)

        if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }

        let ratingsSum = 0;

        for (const rating of firstFiveRatings) {
            ratingsSum += Number(rating)
        }

        const dateNow = new Date()

        return { ratingsSum, created_at: dateNow.getTime() }
    }

    return { error: 'ratings is required' }
}

const appRatings: string[] = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)
