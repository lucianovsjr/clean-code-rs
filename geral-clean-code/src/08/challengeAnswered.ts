type User = {
    name: string,
    email: string,
    avatar: string,
}

async function newUserOnBd(userData: User) {
    const { email, name, avatar } = userData

    const avatarIsEmpty = !avatar
    if (avatarIsEmpty) return { error: 'avatar is required' }

    const nameIsEmpty = !name
    if (nameIsEmpty) return { error: 'name is required' }

    const emailUser = getUserByEmail(email)

    const emailExists = !!emailUser
    if (emailExists) {
        return { error: 'email already used' }
    }

    const avatarInJPG = convertImageToJPG(avatar)

    const createdUser = await createUser({ email, name, avatar: avatarInJPG })

    return { createdUser }
}