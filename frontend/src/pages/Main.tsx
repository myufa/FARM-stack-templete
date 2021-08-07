import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Grid, Typography, Input, Button } from '@material-ui/core'
import { apiClient } from '../services'
import { usePageStore } from '../store'
import { Counter } from '../components/Counter'

const MainContainer = styled.div`
    font-size: 20px;
    /* display: flex;
    justify-content: center; */
`
const PreviewImage = styled.img`
    width: 100px;
    max-height: 100px;
`
const UploadedImageDisplay = styled.img`
    width: 200px;
    max-height: 200px;
`

interface MainProps {

}

export const Main: FC<MainProps> = ({children}) => {
    const [ message, setMessage ] = useState('')
    const [ image, setImage ] = useState<File | undefined>()
    const [ uploadedImgURL, setUploadedImgURL ] = useState<string | undefined>()
    const { setPage } = usePageStore()

    useEffect(() => {
        setPage('/')
    }, [])

    const updateMessage = () => async () => {
        const newMessage = await apiClient.getMessage()
        setMessage(newMessage)
    }

    const handleImageChange = () => (e: React.FormEvent<any>) => {
        e.preventDefault()
        console.log(e)
        if(e.currentTarget.files){
            const file = e.currentTarget.files[0]
            setImage(file)
            return(
                <div className='success-pic'>Yay! You did it!</div>
            )
        } 
    }

    const uploadImage = () => async () => {
        const uploadedImageURLResult = image ? await apiClient.uploadImage(image) : null
        console.log(uploadedImageURLResult)
        if(uploadedImageURLResult) setUploadedImgURL(uploadedImageURLResult)
    }

    return (
        <MainContainer>
            <Box>Hi from main</Box>
            <Box>{message}</Box>
            <Button 
                onClick={updateMessage()}
            >Get New Message</Button>
            <Input 
                type='file' 
                onChange={handleImageChange()}
                inputProps={{accept: '.png,.PNG,.jpeg,.JPEG,.gif,.GIF'}}
            />
            {image ? <Button onClick={uploadImage()}>Upload image</Button>: null}
            {image ? 
            <PreviewImage 
                src={URL.createObjectURL(image)}
                alt="preview"
            />
            : null}
            {uploadedImgURL ? 
            <UploadedImageDisplay 
                src={uploadedImgURL}
                alt="preview"
            />
            : null}
            <Counter />
        </MainContainer>
    )
}