import styles from './Transactions.module.css'

const Transactions = ({ items }) => { 
    return (
  <table className={styles.table}>
  <thead className={styles.head}>
    <tr>
      <th className={styles.item}>Type</th>
      <th className={styles.item}>Amount</th>
      <th className={styles.item}>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map(({id, type, amount, currency}) => (
                <tr key={id}>
                    <td className={styles.item}> { type }</td>
                    <td className={styles.item}>{ amount }</td>
                    <td className={styles.item}>{ currency }</td>
                </tr>
            ))}
  </tbody>
</table> 
    ) 
}

export default Transactions