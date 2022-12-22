type UserBody = {
    name: string,
    email: string,
    password: string,
}

type UserParams = {
    id: string,
}

interface UpdateUserRouteProps {
    body: UserBody
    params: UserParams
}

interface UpdateUserontrollerProps {
    data: UserBody
    params: UserParams
}

interface UpdateUserRepositoryProps {
    data: UserBody
    params: UserParams
}

function updateUserRoute({ body, params }: UpdateUserRouteProps) {
    const { name, email, password } = body
    const { id } = params
    updateUserController({
        data: {
            name,
            email,
            password,
        },
        params: {
            id,
        }
    })
}

function updateUserController({ data, params }: UpdateUserontrollerProps) {
    const { name, email, password } = data
    const { id } = params
    userRepository.update({
        data: { name, email, password },
        params: { id },
    })
}

const userRepository = {
    update: ({ data, params }: UpdateUserRepositoryProps) => { },
}