import {useState} from 'react';
import { ITEMS } from '../../items';
import './Card.css';

function Card() {

  const[isOpen, setIsOpen] = useState(false);

  return (
      <div className="card" onClick={() => setIsOpen(!isOpen)}>
        <h2 className='title'>Card Title</h2>
        <div className={`items${isOpen ? '--open' : ''}`}>
          <ul className="item-list">
            {ITEMS.map(({id, itemName}) => 
              <li key={id} className="item">{itemName}</li>
            )}
          </ul>
        </div>
      </div>
  )
} 

export default Card;
