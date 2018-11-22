/* MODEL SERVI�O */

	SELECT 
		DISTINCT 
		PRO.CODGRUPOPROD AS CodServico,
		GRU.DESCRGRUPOPROD AS Nome
		FROM TGFPRO PRO 
		INNER JOIN TGFGRU GRU  WITH(NOLOCK) ON GRU.CODGRUPOPROD = PRO.CODGRUPOPROD
		WHERE PRO.CODGRUPOPROD <> 0
		AND PRO.CODPROD IN (SELECT 
								CODPROD 
								FROM BH_FTLEQP EQP
								WHERE EQP.NUMCONTRATO IN (91)
							)


