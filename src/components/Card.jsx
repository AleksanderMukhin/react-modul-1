import data from '../data.json';
import { Head } from './Head';

export const Card = () => {
  return data.map(({id, url, title}) => {
  return <div key={id} className="card mx-auto my-2" style={{ width: '18rem' }}>
  <img src={url} className="card-img-top" alt={title} />
  <div className="card-body">
    <h5 className="card-title">Card title: {title}</h5>
      {/* {Head({clas: 'card-title', id: 'id-123'})} */}
      <Head clas= 'card-title' id= 'id-123' />
    <a href="http" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
})}