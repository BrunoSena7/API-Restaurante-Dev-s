export default function CriarCategoria() {

  function salvar() {
    alert("Categoria criada com sucesso!");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Criar Categoria</h1>

      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
