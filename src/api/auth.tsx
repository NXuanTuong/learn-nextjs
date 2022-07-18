import instance from "./instance"

export const signup = (user) => {
    return instance.post("/users", user)
}
export const listUser = (url) => {
    return instance.get(url)
}