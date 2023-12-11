const choice = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };
  


const remove = (items, item) => {
    const foundIndex = items.findIndex(i => i === item);
  
    if (foundIndex === -1) {
      return "Item was not found, please try again";
    }
  
    items.splice(foundIndex, 1);
    return items;
  };
  

export {choice, remove}