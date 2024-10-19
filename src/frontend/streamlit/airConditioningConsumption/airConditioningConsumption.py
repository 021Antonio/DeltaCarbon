import streamlit as st
import matplotlib.pyplot as plt

# Configuração da página no Streamlit
st.set_page_config(layout="centered")

# Dados para o gráfico
percent_consumo = 30  # Percentual de consumo
restante = 100 - percent_consumo  # O restante para completar 100%

# Configuração do tamanho do gráfico (ajustado para o tamanho especificado)
fig, ax = plt.subplots(figsize=(2.73, 1.34))  # Tamanho: 273px x 134px em polegadas
fig.patch.set_facecolor('white')  # Define o fundo da figura como branco

# Criação do gráfico de rosca
ax.pie([percent_consumo, restante], 
       startangle=90, 
       counterclock=False, 
       wedgeprops={'width': 0.3}, 
       colors=['#4CAF50', '#E0E0E0'])  # Verde e cinza claro

# Adicionar o texto "30%" no centro do gráfico
ax.text(0, -0.05, f'{percent_consumo}%', ha='center', va='center', fontsize=14, fontweight='bold')

# Adicionar o texto "Consumo da climatização" abaixo de "30%" dentro do gráfico
ax.text(0, -1.2, 'Consumo da climatização', ha='center', va='center', fontsize=10, fontweight='bold')

# Ajustar o layout para que o gráfico ocupe todo o espaço disponível
ax.set_aspect('equal')  # Garante que o gráfico seja circular
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)  # Remove os espaços ao redor

# Exibir o gráfico no Streamlit
st.pyplot(fig)
