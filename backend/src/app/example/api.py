from fastapi import APIRouter, Body, UploadFile, File
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
import numpy as np
from .controller import example_controller

router = APIRouter()


@router.get('/hello')
async def basic():
    return {'message': "!hello from the backend!"}

@router.get('/message')
async def basic():
    special_number = (np.random.randn() * 38) // 3
    print(special_number)
    return {'message': f"your special number is {special_number}"}


class upload_image_response(BaseModel):
    imageURL: str

@router.post('/upload-image', response_model=upload_image_response)
async def upload_profile_pic(imageFile: UploadFile = File(...)):
    print('/example/upload-image')
    image_URL = await example_controller.upload_image(imageFile)
    print('image_URL:', image_URL, imageFile.filename)
    return {'imageURL': image_URL}