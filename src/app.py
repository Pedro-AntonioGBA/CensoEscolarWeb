import pandas as pd

chunks = pd.read_csv('Tabela_Escola_2025_V2.csv',sep=';', chunksize=1000,encoding='latin1',usecols=["NO_ENTIDADE",
        "CO_ENTIDADE",
        "NO_UF",
        "SG_UF",
        "CO_UF",
        "NO_MUNICIPIO",
        "CO_MUNICIPIO",
        "NO_REGIAO_GEOG_INTERM",
        "CO_REGIAO_GEOG_INTERM",
        "NO_REGIAO_GEOG_IMED",
        "CO_REGIAO_GEOG_IMED",
        "NU_ANO_CENSO",
        "NO_REGIAO",
        "CO_REGIAO",
        ],
        dtype={'CO_ENTIDADE': 'string'})

escolas = []

for i in chunks:
    escolas.append(i)

escolas = pd.concat(escolas, ignore_index=True)

chunks2 = pd.read_csv(
    'Tabela_Matricula_2025_V2.csv',
    sep=';',
    chunksize=1000,
    encoding='latin1',
    usecols=[
        "CO_ENTIDADE",
        "NU_ANO_CENSO",
        "QT_MAT_BAS",
        "QT_MAT_INF",
        "QT_MAT_FUND",
        "QT_MAT_MED",
        "QT_MAT_PROF",
        "QT_MAT_EJA",
        "QT_MAT_ESP"
    ],
    dtype={'CO_ENTIDADE': 'string'}
)


primeiro = True
for j in chunks2:
    juncao = pd.merge(escolas, j, on= 'CO_ENTIDADE', how='inner')


    if primeiro:
        modo = 'w'
    else:
        modo = 'a'

    juncao.to_json(
                'Escolas_Matriculas_2025.json',
                orient='records',
                lines=True,
                force_ascii=False,
                mode=modo
            )

    primeiro = False
