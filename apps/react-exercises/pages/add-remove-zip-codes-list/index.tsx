import { ChangeEvent, useState } from 'react'
import styles from './zipcodes.module.css'

function AddRemoveZipCodes({ defaultItems = ['06811', '94242'] }) {
  const [inputVal, setInputVal] = useState<string>()
  const [zipcodes, setZipCodes] = useState<Array<string>>(defaultItems)

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setInputVal(event.target.value)
  }

  function addItem() {
    // avoid duplicates
    setZipCodes(prevState => {
      const exists = prevState.find(i => i === inputVal)
      if (exists || !inputVal) return prevState

      return [...prevState, inputVal]
    })
    // clear input
    setInputVal('')
  }

  function removeItem(item: string) {
    if (!item) return

    setZipCodes(prevState => prevState.filter(i => i !== item))
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <h1>Add and Remove Zip Codes from a list</h1>
          <p>this example does not use Refs</p>
        </div>
        <div className={styles.inputContainer}>
          <button className={styles.btn} onClick={addItem}>
            add
          </button>
          <input
            type='text'
            defaultValue=''
            onChange={onChange}
            value={inputVal}
          />
        </div>
        <div className={styles.zipcodesContainer}>
          <ul>
            {zipcodes.map(item => (
              <li key={item}>
                <button className={styles.btn} onClick={() => removeItem(item)}>
                  remove
                </button>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default AddRemoveZipCodes
