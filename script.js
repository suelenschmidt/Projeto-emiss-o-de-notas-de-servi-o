function calcularNotaFiscal() {
    // Obter dados do formulário
    const nomeCliente = document.getElementById('nomeCliente').value;
    const valorServico = parseFloat(document.getElementById('valorServico').value);
    const aliquotaImposto = parseFloat(document.getElementById('aliquotaImposto').value);

    // Calcular imposto
    const imposto = (valorServico * aliquotaImposto) / 100;

    // Calcular total (serviço + imposto)
    const total = valorServico + imposto;

    // Gerar nota fiscal em HTML
    const notaFiscalHTML = `
        <p><strong>Nome do Cliente:</strong> ${nomeCliente}</p>
        <p><strong>Valor do Serviço (R$):</strong> ${valorServico.toFixed(4)}</p>
        <p><strong>Imposto (${aliquotaImposto}%):</strong> ${imposto.toFixed(2)}</p>
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
    `;

    // Exibir nota fiscal na página
    document.getElementById('notaFiscal').innerHTML = notaFiscalHTML;
}