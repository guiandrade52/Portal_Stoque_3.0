SELECT	 DISTINCT
		 PRO.DESCRPROD AS DescProd
		,PRO.CODPROD AS CodProd
		,PRO.CODGRUPOPROD AS CodGrupo
        ,GRU.DESCRGRUPOPROD AS DescrGrupo
FROM TGFPRO PRO
INNER JOIN TGFGRU GRU WITH(NOLOCK) ON GRU.CODGRUPOPROD = PRO.CODGRUPOPROD
INNER JOIN BH_FTLEQP EQP WITH(NOLOCK) ON EQP.CODPROD = PRO.CODPROD
WHERE 1 = 1 
AND EQP.SITUACAO = 'A' 
AND GRU.CODGRUPOPROD = 50200
AND EQP.CODPARC = 1
ORDER BY PRO.DESCRPROD