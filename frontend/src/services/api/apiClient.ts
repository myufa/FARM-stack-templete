import { BaseClient } from "../baseClient";


export class APIClient extends BaseClient {
    constructor() {
        // Base api route
        super('example/')
    }

    async getHello(): Promise<string> {
        const result = await this.get('hello')
        return result.data.message
    }

    async getMessage(): Promise<string> {
        const result = await this.get('message')
        return result.data.message
    }

    async uploadImage(imageFile: File): Promise<string> {
        // Post an image file and return a public url to that image
        const form = new FormData()
        form.append('imageFile', imageFile)
        const result: any = await this.post(
            "upload-image",
            form,
            {},
            {'Content-Type': 'multipart/form-data', 'accept': 'application/json'}
        )
        const imageURL = result.data.imageURL
        return this.baseURL + imageURL
    }
 }

export const apiClient = new APIClient()
