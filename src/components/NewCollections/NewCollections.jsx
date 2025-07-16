import './NewCollections.css';
import new_collections from './../assets/new_collections';
import Item from './../Item/Item';

const NewCollections = () => {
  return (
    <div className="container">
      <div className="new-collections">
        <h1>New Collection</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
