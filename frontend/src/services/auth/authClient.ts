import { BaseClient } from "../baseClient";


export class AuthClient extends BaseClient {

    constructor() {
        super('auth/')
    }

    async createUser(newUser: any): Promise<any> {
        let result: any = {} 
        try {
            result = await this.post('create-account', newUser)
        } catch (err) {
            throw new Error(err)
        }
        localStorage.setItem("token", result.data.access_token)
        localStorage.setItem("token_type", result.data.token_type)
        localStorage.setItem("userId", result.data.userId)

        return result.data
    }


    async login(existingUser: {email: string; password: string}): Promise<any> {
        const form = new FormData()
        form.append('username', existingUser.email)
        form.append('password', existingUser.password)
        const result: any = await this.post(
            "login",
            form,
        )
        localStorage.setItem("token", result.data.access_token)
        localStorage.setItem("token_type", result.data.token_type)
        localStorage.setItem("userId", result.data.userId)
        return result.data
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('token_type');
        window.open('/login', '_self')
    }   

    async isLoggedIn(): Promise<boolean> {
        try {
            const result = await this.get('is-authenticated')
            return result.status === 200
        } catch (err) {
            return false
        }
    }
 }

export const authClient = new AuthClient()
