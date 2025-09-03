function lista(tarefas){
    let aFazer = tarefas.filter(item => item.completa === false);
    aFazer = aFazer.map(item => {
        if (item.texto.length > 10) {
            return { ...item, prioridade: "alta" };
        }
        return item
    })
    return aFazer
}