import streamlit as st
import matplotlib.pyplot as plt
from matplotlib.offsetbox import OffsetImage, AnnotationBbox
import os

# Configuração da página no Streamlit
st.set_page_config(layout="centered")

# Função para carregar a imagem
def get_image(path):
    img = plt.imread(path)
    return OffsetImage(img, zoom=0.7)  # Aumenta o tamanho da imagem

# Defina o caminho da imagem que você deseja usar
image_path = './leaf1.png'  # Substitua pelo caminho da sua imagem

# Verificar se o caminho da imagem existe
if os.path.exists(image_path):
    # Dados para o gráfico
    percent_reducao = 15  # Porcentagem de redução (ajustado para a imagem de exemplo)
    restante = 100 - percent_reducao

    # Configuração do tamanho do gráfico (em px) e do estilo de bordas
    fig, ax = plt.subplots(figsize=(3.4, 3.35))  # Tamanho: 340.47px x 335.97px
    fig.patch.set_facecolor('white')  # Define o fundo da figura como branco

    # Criação do gráfico de rosca
    ax.pie([percent_reducao, restante], 
           startangle=90, 
           counterclock=False, 
           wedgeprops={'width': 0.3}, 
           colors=['#4CAF50', '#E0E0E0'])

    # Adicionar a imagem no centro do gráfico com mais espaço
    imagebox = get_image(image_path)
    ab = AnnotationBbox(imagebox, (0, 0.25), frameon=False)  # Aumenta o espaço entre a imagem e o texto
    ax.add_artist(ab)

    # Adicionar a porcentagem abaixo da imagem com mais espaço
    ax.text(0, -0.25, f'{percent_reducao}%', ha='center', va='center', fontsize=20, fontweight='bold')

    # Adicionar o texto "Você reduziu" no topo do gráfico
    ax.text(0, 1.15, 'Você reduziu', ha='center', va='center', fontsize=16, fontweight='bold')

    # Adicionar o texto "das emissões de carbono" no fundo do gráfico
    ax.text(0, -1.15, 'das emissões de carbono', ha='center', va='center', fontsize=12, fontweight='bold')

    # Ajustes do layout do gráfico
    ax.set_aspect('equal')  # Garante que o gráfico seja circular
    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)  # Remove os espaços ao redor

    # Exibir o gráfico no Streamlit
    st.pyplot(fig)

else:
    st.error("O caminho da imagem não foi encontrado.")
