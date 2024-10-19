import streamlit as st
import matplotlib.pyplot as plt

# Configuração da página no Streamlit
st.set_page_config(layout="centered")

# Dados para o gráfico
kwh_economizados = 62  # KWh economizados
restante = 100 - (kwh_economizados / 100 * 100)  # Calcula o restante da rosca para completar 100%

# Configuração do tamanho do gráfico (em px) e do estilo de bordas
fig, ax = plt.subplots(figsize=(3.4, 3.35))  # Tamanho: 340.47px x 335.97px
fig.patch.set_facecolor('white')  # Define o fundo da figura como branco

# Criação do gráfico de rosca
ax.pie([kwh_economizados, restante], 
       startangle=90, 
       counterclock=False, 
       wedgeprops={'width': 0.3}, 
       colors=['#1E88E5', '#BBDEFB'])  # Azul escuro e azul claro

# Adicionar o texto "62 KWh" no centro do gráfico
ax.text(0, 0.1, f'{kwh_economizados}', ha='center', va='center', fontsize=30, fontweight='bold')

ax.text(0, -0.3, f'KWh', ha='center', va='center', fontsize=20, fontweight='bold')


# Adicionar o texto "Economizados" logo abaixo de "62 KWh"
ax.text(0, -1.2, 'Economizados', ha='center', va='center', fontsize=20, fontweight='bold')

# Ajustes do layout do gráfico
ax.set_aspect('equal')  # Garante que o gráfico seja circular
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)  # Remove os espaços ao redor

# Exibir o gráfico no Streamlit
st.pyplot(fig)
