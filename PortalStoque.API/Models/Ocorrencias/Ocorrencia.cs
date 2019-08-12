﻿using PortalStoque.API.Models.Anexos;
using PortalStoque.API.Models.Cits;
using PortalStoque.API.Models.Rats;
using PortalStoque.API.Models.SolucaoProposta;
using System.Collections.Generic;

namespace PortalStoque.API.Models.Ocorrencias
{
    public class Ocorrencia
    {
        public int ExecutionId { get; set; }
        public string Situacao { get; set; }
        public string Origem { get; set; }
        public string Responsavel { get; set; }
        public string DataTr { get; set; }
        public string DataTs { get; set; }
        public string DataCr { get; set; }
        public string Serie { get; set; }
        public string UserPortal { get; set; }
        public string ClienteAt { get; set; }
        public string Contato { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Classificacao { get; set; }
        public string TipoOcorrencia { get; set; }
        public string GrupoServico { get; set; }
        public string Servico { get; set; }
        public string Descricao { get; set; }
        public string Produto { get; set; }
        public int idSituacao { get; set; }
        public Solucao Solucao { get; set; }
        public IEnumerable<Rat> Rats { get; set; }
        public IEnumerable<Anexo> Anexos { get; set; }
        public Cit Cit { get; set; }
    }
}