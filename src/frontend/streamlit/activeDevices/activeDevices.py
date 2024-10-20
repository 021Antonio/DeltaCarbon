import streamlit as st
from PIL import Image
from io import BytesIO
import base64

def create_card(icon, number, description):
    st.markdown(
        f"""
        <div style="border-radius: 10px; padding: 10px; background-color: transparent; width: 300px; height: 150px; display: flex; align-items: center; justify-content: center; border: none;">
            <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                <div style="border-radius: 50%; width: 90px; height: 90px; background-color: #238F8526; display: flex; align-items: center; justify-content: center;">
                    <img src="data:image/png;base64,{icon}" width="60" height="60">
                </div>
            </div>
            <div style="color: black; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div style="margin:0px; text-align: center;">
                    <h1 style="margin:0px; font-size: 48px; color: black; text-align: center;">{number}</h1>
                    <h4 style="margin: 0; font-size: 18px; color: black; text-align: center;">{description}</h4>
                </div>
            </div>
        </div>
        """,
        unsafe_allow_html=True
    )

with open("./wind1.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode()

# Criar o card
create_card(encoded_string, 13, "Dispositivos ativos")
