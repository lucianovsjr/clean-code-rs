// Nomenclatura de variáveis

type UserCategories = {
  title: string,
  followers: number,
}

const userCategories: UserCategories[] = [
    {
      title: 'User',
      followers: 5
    },
    {
      title: 'Friendly',
      followers: 50,
    },
    {
      title: 'Famous',
      followers: 500,
    },
    {
      title: 'Super Star',
      followers: 1000,
    },
  ]
  
  export default async function getUserCategory(req, res) {
    const githubUsername = String(req.query.username)
  
    if (!githubUsername) {
      return res.status(400).json({
        message: `Please provide an username to search on the github API`
      })
    }
  
    const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
  
    if (userResponse.status === 404) {
      return res.status(400).json({
        message: `User with username "${githubUsername}" not found`
      })
    }
  
    const userData = await userResponse.json()
  
    const categoriesSortedByMostFollowers = userCategories.sort((a, b) =>  b.followers - a.followers); 
  
    const userCategory = categoriesSortedByMostFollowers.find(i => userData.followers > i.followers)
  
    return {
      github: githubUsername,
      category: userCategory.title
    }
  }
  
  getUserCategory({ query: {
    username: 'josepholiveira'
  }}, {})