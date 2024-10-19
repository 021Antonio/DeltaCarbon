import streamlit as st
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.colors as mcolors

# Configurando a fonte personalizada
plt.rcParams['font.family'] = 'Barlow'  # Certifique-se de que 'Barlow' está instalada no sistema
plt.rcParams['font.size'] = 10
plt.rcParams['font.weight'] = 'bold'
plt.rcParams['axes.titleweight'] = 'bold'  # Para o peso do título
plt.rcParams['axes.labelweight'] = 'bold'  # Para o peso dos rótulos dos eixos

# Dados simulados (corrigido para 9 meses)
meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago']
valor_sem_gas = [99, 95, 90, 93, 95, 98, 94, 99]
valor_com_gas = [81, 79, 75, 77, 78, 80, 82, 81]

# Criando um fundo de gradiente para o gráfico e parte externa
def plot_with_custom_style():
    fig, ax = plt.subplots()

    # Ajustando o tamanho do gráfico (734px x 255.49px)
    fig.set_size_inches(734 / 96, 255.49 / 96)  # Conversão de pixels para polegadas (96 dpi)

    # Definindo o gradiente personalizado com as cores desejadas
    gradient = np.linspace(0, 1, 256)
    gradient = np.vstack((gradient, gradient))

    # Definir as cores do gradiente (#238F85 no topo e #0A2926 no fundo)
    cmap = mcolors.LinearSegmentedColormap.from_list("custom_gradient", ["#238F85", "#0A2926"])

    # Aplicar o gradiente no fundo da figura inteira
    fig.patch.set_facecolor('#0A2926')
    fig.figimage(plt.get_cmap(cmap)(gradient), xo=0, yo=0, alpha=1, origin='upper', zorder=-1)

    # Plotar o gradiente no fundo do gráfico (dentro do eixo)
    ax.imshow(gradient.T, aspect='auto', cmap=cmap, extent=[0, 9, 54, 99], zorder=-2)

    # Suavizando as linhas do gráfico (usando splines para suavizar as curvas)
    from scipy.interpolate import make_interp_spline
    x = np.arange(len(meses))

    # Interpolação para suavizar as curvas
    x_smooth = np.linspace(x.min(), x.max(), 300)
    spl_sem_gas = make_interp_spline(x, valor_sem_gas, k=3)
    spl_com_gas = make_interp_spline(x, valor_com_gas, k=3)

    valor_sem_gas_smooth = spl_sem_gas(x_smooth)
    valor_com_gas_smooth = spl_com_gas(x_smooth)

    # Plot da linha vermelha
    ax.plot(x_smooth, valor_sem_gas_smooth, color='red', linewidth=2)

    # Aplicar o gradiente de preenchimento abaixo da linha vermelha
    ax.fill_between(
        x_smooth,
        valor_sem_gas_smooth,
        valor_sem_gas_smooth - 10,  # Limite 10 unidades abaixo da linha
        where=(valor_sem_gas_smooth > 74),
        interpolate=True,
        color='red',
        alpha=0.2  # Transparência inicial
    )
    ax.fill_between(
        x_smooth,
        valor_sem_gas_smooth,
        valor_sem_gas_smooth - 3,  # Limite 3 unidades abaixo da linha
        where=(valor_sem_gas_smooth > 74),
        interpolate=True,
        color='orange',
        alpha=0.0  # Transparência final
    )

    # Plot da linha verde
    ax.plot(x_smooth, valor_com_gas_smooth, color='green', linewidth=2)

    # Aplicar o gradiente de preenchimento abaixo da linha verde (até 5 unidades abaixo)
    ax.fill_between(
        x_smooth,
        valor_com_gas_smooth,
        valor_com_gas_smooth - 10,  # Limite 10 unidades abaixo da linha verde
        where=(valor_com_gas_smooth > 60),
        interpolate=True,
        color='green',
        alpha=0.2  # Transparência inicial
    )
    ax.fill_between(
        x_smooth,
        valor_com_gas_smooth,
        valor_com_gas_smooth - 3,  # Limite 3 unidades abaixo da linha
        where=(valor_com_gas_smooth > 60),
        interpolate=True,
        color='green',
        alpha=0.0  # Transparência final
    )

    # Ajustar os limites do eixo Y para que o gráfico vá de 20 em 20
    ax.set_yticks(np.arange(60, 101, 20))  # Ticks de 20 em 20, ajustado para o intervalo de 60 a 100
    ax.set_ylim(54, 100)  # Definir limites ajustados no eixo Y

    # Ajustar os limites do eixo X para que o gráfico termine no último mês
    ax.set_xlim(0, len(meses) - 1)

    # Adicionando títulos e rótulos
    ax.set_title('Valor financeiro economizado $', color='white', loc='center', fontsize=15, pad=20)
    ax.set_ylabel('R$', color='white')
    ax.set_xlabel('Meses', color='white')

    # Ajustando os ticks do eixo X para exibir os meses
    ax.set_xticks(np.arange(len(meses)))  # Define as posições dos ticks
    ax.set_xticklabels(meses, color='white')  # Define os rótulos dos meses

    # Ajustando cores dos ticks para ficarem visíveis
    ax.tick_params(colors='white')

    return fig

# Renderizando o gráfico no Streamlit
st.pyplot(plot_with_custom_style())
