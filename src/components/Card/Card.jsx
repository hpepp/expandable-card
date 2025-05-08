import {useState} from 'react';
import { ITEMS } from '../../items';
import './Card.css';

function Card() {

  const[isOpen, setIsOpen] = useState(false);

  return (
      <div className="card" onClick={() => setIsOpen(!isOpen)}>
        <div className="header">
          <h2 className='title'>Card Title</h2>
          {isOpen ? 
            <img src="src/assets/chevron-up-solid.svg" className="icon"/>
            : <img src="src/assets/chevron-down-solid.svg" className="icon"/>
          }
        </div>
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
