import React, { useState } from "react";

function InventoryApp () {
    const [inventory, setInventory] = useState([]);

    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setInventory([...inventory, newItem]);

            setNewItem('');
        }
    };
        const handleRemoveItem = (index) => {
            const updateInventory = [...inventory];
            updateInventory.splice(index, 1);
            setInventory(updateInventory);
        };


    return (     
         
         
        <div className="Container">           
            <h1 className="text-titulo">Controle de Inventário</h1>

            <div Container-secundario>
                <input className="input-adicionar"
                    type="text" 
                    placeholder="Digite aqui"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button className="btn-adicionar" onClick={handleAddItem}>Adicionar Item</button>
                    
            </div> 

            <form className="container-form"> 
                     
                    <ul className="list-container">
                        {inventory.map((item, index) => (

                        <li className="list-inventario" key={index}>
                                {item}
                            <button className="btn-remover" onClick={() => handleRemoveItem(index)}>Deletar</button>    
                        </li>     
                        ))}
                    </ul>
            </form>                 

        </div>

       
    );
}

export default InventoryApp;





