import streamlit as st
import matplotlib.pyplot as plt
from matplotlib.offsetbox import OffsetImage, AnnotationBbox
import os  # Importa o módulo os

# Configuração da página no Streamlit
st.set_page_config(layout="centered")

# Função para carregar a imagem
def get_image(path):
    img = plt.imread(path)
    return OffsetImage(img, zoom=0.5)  # Ajusta o tamanho da imagem

# Defina o caminho da imagem
image_path = './Ellipse2.png'

# Verificar se o caminho da imagem existe
if os.path.exists(image_path):
    # Configuração do tamanho da figura
    fig, ax = plt.subplots(figsize=(4, 2))  # Ajustado para layout horizontal mais largo

    # Remover as bordas
    ax.axis("off")

    # Carregar e posicionar a imagem
    imagebox = get_image(image_path)
    ab = AnnotationBbox(imagebox, (-0.5, 0), frameon=False)  # Posição da imagem à esquerda
    ax.add_artist(ab)

    # Adicionar o texto da temperatura "21ºC" à direita da imagem
    ax.text(0.3, 0.1, '21ºC', ha='left', va='center', fontsize=28, fontweight='bold', color='#424242')

    # Adicionar o texto "Temperatura" abaixo de "21ºC"
    ax.text(0.3, -0.3, 'Temperatura', ha='left', va='center', fontsize=16, color='#424242')

    # Ajustar o layout
    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

    # Exibir o gráfico no Streamlit
    st.pyplot(fig)
else:
    st.error("O caminho da imagem não foi encontrado.")
