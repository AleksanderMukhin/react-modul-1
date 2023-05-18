import data from '../../data.json';
import { Head } from '../Head/Head';
// import clsx from 'clsx';

import css from './Card.module.css';



// stili na moduljah=============================
export const Card = ({isOnline}) => {
  return data.map(({id, url, title}) => {
    return <div key={id}
      className={
        isOnline
          ? `${css.main} ${css.red}`
          : `${css.main} ${css.blue}`}

      // cherez biblioteky clsx==================
      // className={clsx(
      //   css.main,
      //   isOnline && css.red,
      //   !isOnline && css.blue
      // )}
      
    >
  <img src={url} alt={title} className={css.photo} />
  <div>
    <h5>Card title: {title}</h5>
      {/* {Head({clas: 'card-title', id: 'id-123'})} */}
      <Head clas='card-title' id='id-123'>
        1
        <div>2</div>
      </Head>
    <a href="http">Go somewhere</a>
  </div>
</div>
  })
}


//==============================bootstrap================

// export const Card = () => {
//   return data.map(({id, url, title}) => {
//   return <div key={id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//   <img src={url} className="card-img-top" alt={title} />
//   <div className="card-body">
//     <h5 className="card-title">Card title: {title}</h5>
//       {/* {Head({clas: 'card-title', id: 'id-123'})} */}
//       <Head clas='card-title' id='id-123'>
//         1
//         <div>2</div>
//       </Head>
//     <a href="http" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//   })
// }